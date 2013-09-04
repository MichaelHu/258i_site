<?php

class Com258i_NotesHandler extends Com258i_PageHandler{

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

        switch(strtoupper($this->request->getLogicParam('act'))){
            case 'GETNOTESWITHLINENO':
                $this->appendContent(
                    json_encode(
                        $this->getNotesWithLineNo(
                            $this->request->getLogicParam('line')
                            ,$this->request->getLogicParam('context_num')
                            ,$this->request->getLogicParam('direction')
                        )
                    )
                );
                break;
            case 'GETNOTESWITHARTICLEID':
                $this->appendContent(
                    json_encode(
                        $this->getNotesWithArticleID(
                            $this->request->getLogicParam('article_id')
                            ,$this->request->getLogicParam('context_num')
                        )
                    )
                );
                break;
            case 'GETARTICLEABSTRACTS':
                $this->appendContent(
                    json_encode(
                        $this->getArticleAbstracts(
                            $this->request->getLogicParam('from_article_id')
                            ,$this->request->getLogicParam('context_num')
                        )
                    )
                );
                break;
            case 'SEARCHNOTES':
                $this->appendContent(
                    json_encode(
                        $this->searchNotes(
                            $this->request->getLogicParam('key_words')
                            ,$this->request->getLogicParam('from')
                            ,$this->request->getLogicParam('count')
                            ,$this->request->getLogicParam('context_num')
                        )
                    )
                );
                break;
        }

	}

    private function getNotesWithArticleID($article_id, $context_num){

        $db = $this->getDBConnect();

        $query = 'call p_getline_with_article_id(' 
            . $article_id  
            . ', ' . $context_num  
            . ')';

        $article_info = array();
        $rows_with_context = array();

        try {
            // $result = mysql_query($query);
            $db->multi_query($query);

            // 获取文章信息
            $result = $db->store_result();
            $article_info = $result->fetch_assoc();
            $result->close();

            // 获取结果
            $db->next_result();
            $result = $db->store_result();
            while($row = $result->fetch_assoc()){
                array_push($rows_with_context, $row);
            }
            $result->close();
        }
        catch(Exception $e){
            exit(0);
        }

        // 为啥前端eval不了关联数组方式的输出？
        return array(
            $article_info,
            $rows_with_context
        );

    }

    private function getArticleAbstracts($from_article_id, $context_num){

        $db = $this->getDBConnect();


        $query = 'call p_list_notes_with_context(' 
            . $from_article_id  
            . ', ' . $context_num  
            . ',  1'
            . ')';

        $rows_with_context = array();

        try {
            // $result = mysql_query($query);
            $db->multi_query($query);

            // 获取结果
            $result = $db->store_result();
            while($row = $result->fetch_assoc()){
                array_push($rows_with_context, $row); 
            }
            $result->close();
        }
        catch(Exception $e){
            exit(0);
        }

        return array(
            $rows_with_context
        );

    }



    private function getNotesWithLineNo($line_no, $context_num, $direction){

        $db = $this->getDBConnect();

        $query = 'call p_getline_with_context(' 
            . $line_no  
            . ', ' . $context_num  
            . ', ' . $direction  
            . ')';

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

    private function searchNotes($key_words, $from_index, $count_num, $context_num){

        $db = $this->getDBConnect();

        $query = 'call p_search("'
            . mysql_escape_string($key_words)
            . '", ' . $from_index
            . ', ' . $count_num
            . ', ' . $context_num
            . ')';

        $key_word_list = array();
        $rows_count = array();
        $rows_with_context = array();

        try {
            // $result = mysql_query($query);
            $db->multi_query($query);

            // 获取关键词
            $result = $db->store_result();
            $key_word_list = $result->fetch_assoc();
            $result->close();

            // 获取结果总数
            $db->next_result();
            $result = $db->store_result();
            $rows_count = $result->fetch_array();
            $result->close();

            // 获取结果
            $db->next_result();
            $result = $db->store_result();
            while($row = $result->fetch_assoc()){
                array_push($rows_with_context, $row);
            }
            $result->close();
        }
        catch(Exception $e){
            exit(0);
        }

        return array(
            $rows_count,
            $rows_with_context,
            $key_word_list
        );

    }

    private function getDBConnect(){

        if(!defined('MC_OFFLINE')){
            $db= new mysqli("localhost", "hdm0571", "1qa2ws3ed", "hdm0571");
        }
        else{
            $db= new mysqli("127.0.0.1", "root", "", "notes", "3335"); 
            // $db= new mysqli("127.0.0.1", "root", "root", "notes", "3335"); 
        }

        // 解决获取text字段乱码的问题
        $db->query("set Names 'utf8'");

        return $db;
    }

}
