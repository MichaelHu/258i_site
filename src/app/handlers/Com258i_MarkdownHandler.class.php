<?php

class Com258i_MarkdownHandler extends Com258i_PageHandler{

	public function __construct(&$request, &$response){
		parent::__construct($request, $response);
        
        $this->request->enableNoTemplate();
        $this->response->setHeader(
            'Content-Type'
            ,'text/javascript; charset=utf-8'
        );
	}

    protected function appendContent($content){
        $this->response->appendContent($content);
    }

	protected function prepareData(){
		parent::prepareData();

        $this->appendContent(
            var_export($this->request->getLogicParams(), true)
        );

        $db= new mysqli("127.0.0.1", "root", "root", "notes", "3335"); 

        // 解决获取text字段乱码的问题
        $db->query("set Names 'utf8'");

        $query = 'call p_get_markdown_articles("' 
            . mysql_escape_string($title) 
            . '")';

        $rows_with_context = array();

        try {
            // $result = mysql_query($query);
            $db->real_query($query);
            $result = $db->store_result();
            // 获取结果
            while($row = $result->fetch_assoc()){
                array_push($rows_with_context, $row); 
            }
            $result->close();
        }
        catch(Exception $e){
            // echo $e;
            exit(0);
        }

        $this->appendContent(
            josn_encode($rows_with_context)
        );
	}

}
