<?php

class Com258i_IndexHandler extends Com258i_PageHandler{

	public function __construct(&$request, &$response){
		parent::__construct($request, $response);
	}

	protected function prepareData(){

        $json_file = MC_ROOT . '/data/index.json';

		parent::prepareData();

        $this->setPageData('config', $this->iniConfig);
        $this->setPageData('common_config', $this->commonIniConfig);

        $this->setPageData(
            'list_data'
            , json_decode(file_get_contents($json_file))
        );

        $this->setPageData('say', 'Hello, MCPHP!');

	}

}
