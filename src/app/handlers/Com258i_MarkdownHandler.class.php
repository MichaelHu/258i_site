<?php

class Com258i_MarkdownHandler extends Com258i_PageHandler{

	public function __construct(&$request, &$response){
		parent::__construct($request, $response);

        // 无模板模式
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

        if('list_articles'
            == $this->request->getLogicParam('act')){
            $this->appendContent(
                json_encode(
                    $this->listMarkdownArticles(
                        $this->request->getLogicParam('tag')
                    )
                )
            );
        }
        else{
            $this->appendContent(
                $this->getMarkdownArticle(
                    $this->request->getLogicParam('title')
                )
            );
        }
	}

    private function getMarkdownArticle($title){

        $db = $this->getDBConnect();

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

        return empty($rows_with_context)
            ? $rows_with_context
            // 文章内容本身已经是JSON string
            : $rows_with_context[0]['content'];
    }

    private function listMarkdownArticles($tag){

        $db = $this->getDBConnect();

        $query = 'call p_list_markdown_articles("' 
            . mysql_escape_string($tag) 
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

        return $rows_with_context;

    }

    private function getDBConnect(){
        // $db= new mysqli("127.0.0.1", "root", "root", "notes", "3335"); 
        $db= new mysqli("localhost", "hdm0571", "1qa2ws3ed", "hdm0571");

        // 解决获取text字段乱码的问题
        $db->query("set Names 'utf8'");

        return $db;
    }

}
