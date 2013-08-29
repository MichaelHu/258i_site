<?php

class Com258i_IndexHandler extends Com258i_PageHandler{

	public function __construct(&$request, &$response){
		parent::__construct($request, $response);
	}

	protected function prepareData(){

		parent::prepareData();

        $this->setPageData('config', $this->iniConfig);
        $this->setPageData('common_config', $this->commonIniConfig);

        $this->setPageData('say', 'Hello, MCPHP!');

	}

}
