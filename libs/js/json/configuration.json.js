Bizagi.AppModel = {"personalized":false,"userLogoName":"\\libs\\img\\biz-ex-logo.png","bizagiUrl":"http://www.bizagi.com","productName":"Bizagi Modeler","modelName":"Relacionamento Acadêmico","publishDate":"30/09/2024 14:47:17","pages":[{"id":"6b2dbb32-15e7-4f7c-b49b-35928b3f76df","name":"Credenciar Representantes da IES","version":"1.0","author":"jesse.cavalcante","image":"files\\diagrams\\Credenciar Representantes da IES.svg","isSubprocessPage":false,"isCallActivityPage":false,"elements":[],"subPages":[]},{"id":"5eb2bc4a-80f8-4b6e-8d33-e3080c8169ed","name":"Divulgar Vagas CIEE","version":"1.0","author":"Conselho Regional","image":"files\\diagrams\\Divulgar Vagas CIEE.svg","isSubprocessPage":false,"isCallActivityPage":false,"elements":[],"subPages":[]},{"id":"8309f3b6-e85a-4d36-9834-87c47dc3d010","name":"Executar PRA","version":"1.0","author":"jesse.cavalcante","image":"files\\diagrams\\Executar PRA.svg","isSubprocessPage":false,"isCallActivityPage":false,"elements":[{"id":"d2190c46-101a-4b45-9294-670dc024b664","name":"EXECUTAR PRA","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":16.0,"y":16.0}],"radius":0.0,"height":350.0,"width":50.0,"shape":"rect"},"elementType":"Participant","elementSubType":"Participant","properties":[],"pageElements":[{"id":"e5dbaba6-ec6b-4445-9212-f828bb58a78c","name":"Iniciar relacionamento","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\SubProcess.png","imageBounds":{"points":[{"x":226.0,"y":162.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"isPublished":true,"elementType":"SubProcess","elementSubType":"SubProcess","properties":[]},{"id":"bc08f793-2b80-4de9-9d70-de724175f66b","name":"Entregar méritos acadêmicos","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\SubProcess.png","imageBounds":{"points":[{"x":545.1667,"y":162.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"isPublished":true,"elementType":"SubProcess","elementSubType":"SubProcess","properties":[]},{"id":"4677532d-dcc9-4412-bbc0-16be00a4d71f","name":"Acompanhar a realização de Palestras","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\SubProcess.png","imageBounds":{"points":[{"x":456.0,"y":48.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"isPublished":true,"elementType":"SubProcess","elementSubType":"SubProcess","properties":[]},{"id":"d2a38c59-c95d-439c-901b-1355367d9510","name":"Entrega de CIP recém-formado","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\SubProcess.png","imageBounds":{"points":[{"x":636.0,"y":261.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"isPublished":true,"elementType":"SubProcess","elementSubType":"SubProcess","properties":[]},{"id":"52530c43-e343-45b8-a176-c1cf26632c7b","name":"Elaborar relatório geral","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\SubProcess.png","imageBounds":{"points":[{"x":865.8889,"y":162.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"isPublished":true,"elementType":"SubProcess","elementSubType":"SubProcess","properties":[]}]}],"subPages":[{"id":"3f996fa8-86b6-414e-9d72-95b661c4fe99","name":"Fazer confirmação","image":"files\\diagrams\\Fazer confirmacao.svg","isSubprocessPage":true,"isCallActivityPage":false,"elements":[],"parentRef":"d2a38c59-c95d-439c-901b-1355367d9510"},{"id":"d2a38c59-c95d-439c-901b-1355367d9510","name":"Entrega de CIP recém-formado","image":"files\\diagrams\\Entrega de CIP recem-formado.svg","isSubprocessPage":true,"isCallActivityPage":false,"elements":[{"id":"3f996fa8-86b6-414e-9d72-95b661c4fe99","name":"Fazer confirmação","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\SubProcess.png","imageBounds":{"points":[{"x":1322.0,"y":53.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"isPublished":true,"elementType":"SubProcess","elementSubType":"SubProcess","properties":[]}],"parentRef":"8309f3b6-e85a-4d36-9834-87c47dc3d010"},{"id":"933984e4-a848-495f-bd61-1a81c217eb6a","name":"Fazer confirmação","image":"files\\diagrams\\Fazer confirmacao_933984e4-a848-495f-bd61-1a81c217eb6a.svg","isSubprocessPage":true,"isCallActivityPage":false,"elements":[],"parentRef":"bc08f793-2b80-4de9-9d70-de724175f66b"},{"id":"36a602b8-5fec-4905-9796-88fc7782a132","name":"Gerir dados","image":"files\\diagrams\\Gerir dados.svg","isSubprocessPage":true,"isCallActivityPage":false,"elements":[],"parentRef":"bc08f793-2b80-4de9-9d70-de724175f66b"},{"id":"bc08f793-2b80-4de9-9d70-de724175f66b","name":"Entregar méritos acadêmicos","image":"files\\diagrams\\Entregar meritos academicos.svg","isSubprocessPage":true,"isCallActivityPage":false,"elements":[{"id":"8e09e48b-d153-4589-af43-bd8ac2f461f9","name":"Receber oficio","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\ReceiveTask.png","imageBounds":{"points":[{"x":891.0,"y":215.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"ReceiveTask","elementSubType":"ReceiveTask","properties":[{"id":"ReceiveTaskImplementation","name":"Implementação","value":"Serviço Web","type":"text"}]},{"id":"36a602b8-5fec-4905-9796-88fc7782a132","name":"Gerir dados","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\SubProcess.png","imageBounds":{"points":[{"x":891.0,"y":53.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"isPublished":true,"elementType":"SubProcess","elementSubType":"SubProcess","properties":[]},{"id":"933984e4-a848-495f-bd61-1a81c217eb6a","name":"Fazer confirmação","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\SubProcess.png","imageBounds":{"points":[{"x":1401.0,"y":53.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"isPublished":true,"elementType":"SubProcess","elementSubType":"SubProcess","properties":[]}],"parentRef":"8309f3b6-e85a-4d36-9834-87c47dc3d010"},{"id":"97cda9f8-9761-4778-8dfc-138664513d42","name":"Fazer confirmação","image":"files\\diagrams\\Fazer confirmacao_97cda9f8-9761-4778-8dfc-138664513d42.svg","isSubprocessPage":true,"isCallActivityPage":false,"elements":[],"parentRef":"4677532d-dcc9-4412-bbc0-16be00a4d71f"},{"id":"4677532d-dcc9-4412-bbc0-16be00a4d71f","name":"Acompanhar a realização de Palestras","image":"files\\diagrams\\Acompanhar a realizacao de Palestras.svg","isSubprocessPage":true,"isCallActivityPage":false,"elements":[{"id":"97cda9f8-9761-4778-8dfc-138664513d42","name":"Fazer confirmação","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\SubProcess.png","imageBounds":{"points":[{"x":589.0,"y":16.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"isPublished":true,"elementType":"SubProcess","elementSubType":"SubProcess","properties":[]}],"parentRef":"8309f3b6-e85a-4d36-9834-87c47dc3d010"},{"id":"e5dbaba6-ec6b-4445-9212-f828bb58a78c","name":"Iniciar relacionamento","image":"files\\diagrams\\Iniciar relacionamento.svg","isSubprocessPage":true,"isCallActivityPage":false,"elements":[],"parentRef":"8309f3b6-e85a-4d36-9834-87c47dc3d010"},{"id":"52530c43-e343-45b8-a176-c1cf26632c7b","name":"Elaborar relatório geral","image":"files\\diagrams\\Elaborar relatorio geral.svg","isSubprocessPage":true,"isCallActivityPage":false,"elements":[],"parentRef":"8309f3b6-e85a-4d36-9834-87c47dc3d010"}]},{"id":"b9dd837c-b578-49e9-868c-b9f8e1882497","name":"Credenciar Representante do CRA-SP","version":"1.0","author":"aida.rodrigues","image":"files\\diagrams\\Credenciar Representante do CRA-SP.svg","isSubprocessPage":false,"isCallActivityPage":false,"elements":[],"subPages":[]}],"texts":{"tableOfContents":"Índice","pageNumber":"Página","pageNumberLabelOf":"de","version":"Versão","author":"Autor","description":"Descrição","mainPool":"Processo principal","mainPoolDescription":"Processo principal Descrição","processDiagrams":"Processar os Diagramas","processElements":"Elementos do processo","elements":"Elementos do processo","defaultElementName":"Elemento","performers":"Executantes","accountable":"Responsável","consulted":"Consultado","informed":"Informado","connectors":"Conectores","connector":"Conector","home":"Principal","search":"Pesquisar","goToParentProcess":"Ir para Matriz","calledBy":"Chamada por","attachmentsTooltip":"Exibir anexos","visitBizagi":"Visite bizagi.com","contains":"Contém {0} subprocessos","showAll":"Mostrar tudo","fullScreen":"Tela inteira","zoomIn":"Ampliar","zoomOut":"Reduzir","close":"Fechar","menu":"Menu: ","errorPage":"Erro ao visualizar a página","process":"Processo","subProcess":"Subprocessos publicados","contain":"Contém","checkAttributes":"Ver atributos","checkOverview":"Ver resumo","unavailableResource":"O recurso não está disponível","localResource":"O recurso pode ser acessado localmente","performer":"Participantes","linktoimage":"Link para a  imagem","presentationAction":"Ações de apresentação","searchGlobal":"Busca todos","searchLocal":"Busca neste processo","searchResults":"Nenhum resultado encontrado","titlePage":"Início","emptyElement":"Este elemento ainda não foi documentado","unsupported":"Seu navegador não suporta conteúdo exibido por esta página. <br> Recomendamos que você atualizar o seu navegador.","details":"Detalhes","viewDetails":"Ver detalhes","expand":"Expandir","mainPoolProperties":"Propriedades do Processo principal","cannotVisualize":"A página não pode ser exibida","resourceNotFound":"O recurso solicitado não foi encontrado:","applyTheme":"Aplicando novo tema","showMore":"Mostrar mais","showLess":"Mostrar menos","hideDescription":"Ocultar descrição","showDescription":"Mostrar descrição","presentationActionLink":"Exibir ações de apresentação","goToLinkThrow":"Ir para o evento de destino","goToLinkCatch":"Ir para o evento de origem","goToSubProcess":"Ir para o subprocesso","viewByList":"Lista de processos","viewByTree":"Hierarquia de processos","diagramList":"Lista de processos","folderTree":"Hierarquia de processos"},"searchMap":[{"containerId":"5eb2bc4a-80f8-4b6e-8d33-e3080c8169ed","containerName":"Divulgar Vagas CIEE","isSubprocess":false,"elements":[{"id":"bc999a2d-ea30-43fa-8af7-232cb335cb3a","value":"CIEE"},{"id":"da6312a9-8565-46f1-bb51-4ef567a13f22","value":"DIVULGAR VAGAS CIEE"},{"id":"e1cc284e-f082-4e2b-aa70-8557a53e15c4","value":"REL. ACADÊMICO / ESTAGIÁRIO "},{"id":"6eaaf39c-8bc5-4951-bd5c-02fdfef79bc5","value":""},{"id":"eb86e9fe-9d9d-4f7f-900c-97ba858f451c","value":"Enviar e-mail das vagas"},{"id":"afe56ab7-e07a-4168-9db9-c55d6add905b","value":"Baixar relatório SISCAF e segmentar"},{"id":"5ff2b199-b009-4f0b-91ab-609e26f4fddd","value":"Enviar artes"},{"id":"db497103-6c93-4cbb-a598-c8b433ddb65f","value":"Vagas\ndivulgadas"},{"id":"5ef0c029-5c7f-4a17-abe0-be4a779929fd","value":"Editar\nas artes"},{"id":"07a0bbbe-3676-4b3a-9ea2-846e83562423","value":"Atualizar\nCRA-SP Educa"},{"id":"36b3289d-8dbe-4001-ac32-3f01ef79855b","value":"Analisar\nvagas"},{"id":"43275f55-709a-4de4-a87d-feeeb3b5c9d9","value":"Revisar as\nartes"},{"id":"89a1f303-37b3-4c12-805c-04182e23a206","value":"REPRESENTANTE"},{"id":"90d6929e-86cd-4d0d-a129-76e37053c8b0","value":"ESTUDANTES "}]},{"containerId":"6b2dbb32-15e7-4f7c-b49b-35928b3f76df","containerName":"Credenciar Representantes da IES","isSubprocess":false,"elements":[{"id":"053c4d93-a5c1-4cfa-95cb-4b4e807d1a0e","value":"CREDENCIAR REPRESENTANTES DA IES"},{"id":"e128ed37-63f1-45f7-9983-1cd9f3ce8776","value":"REL. ACADÊMICO / COORDENADOR"},{"id":"2c41176a-52c8-46ad-a5bd-9484d67661db","value":"REL. ACADÊMICO / ESTAGIÁRIO"},{"id":"1bc6ff8e-53d9-472d-a399-de3528a8c235","value":"Credenciamento iniciado"},{"id":"1646f770-7f42-4d00-897e-c1530ff424c0","value":"Abrir credenciamento"},{"id":"e0af337b-6413-4772-aa05-e8e0d1c1bdb8","value":"Enviar convite"},{"id":"011703e2-7eae-445c-8569-333a3402b8de","value":""},{"id":"ff9f7b61-78c1-4ef3-8d4d-d117352fbec0","value":"Acompanhar pendências"},{"id":"093b6a24-0c76-4902-b535-7a35c1a0102d","value":"Analisar respostas"},{"id":"e12c5e05-0126-43c7-aef9-ee0580ad7d64","value":""},{"id":"5e30ae64-afb8-42d4-b092-6ef5864783e3","value":"Encerrar credenciamento"},{"id":"f53ca3e7-fe01-4dff-986d-c6d7aa626be5","value":""},{"id":"47466347-0336-46e0-bbe3-73ba9075a34e","value":"Elaborar cronograma"},{"id":"55501bd3-3cb6-4db5-ab2f-be8a2f2b8680","value":"Elaborar agenda"},{"id":"f06e80a1-8d5e-42ee-a387-3e7a428181c4","value":""},{"id":"69543079-87ce-4da3-9de6-c832fd5ce158","value":"Credenciamento encerrado"},{"id":"26c27b8d-bea1-4357-98b0-944d081f0c5a","value":"Credenciamento recusado"},{"id":"ae4a055d-7658-48cd-a6bf-691399c0a0ae","value":"Aguardar resposta prazo 10 dias"},{"id":"ef1a8d63-73ce-4ffa-ac9c-13f6f39f89fa","value":"IES"}]},{"containerId":"8309f3b6-e85a-4d36-9834-87c47dc3d010","containerName":"Executar PRA","isSubprocess":false,"elements":[{"id":"d2190c46-101a-4b45-9294-670dc024b664","value":"EXECUTAR PRA"},{"id":"f679f6de-1cee-4bd8-b09b-a3d732526f5e","value":"COORDENADOR / ESTAGIÁRIO"},{"id":"710bd3e6-82ec-4f81-b15b-58acdedafe11","value":"Demandas"},{"id":"9c43e821-d9fc-4575-a309-7e6d8d722530","value":""},{"id":"0852f576-e248-4281-836e-d0ad5330b313","value":""},{"id":"a3b56230-895e-4fdf-a253-443380938e7e","value":""},{"id":"52530c43-e343-45b8-a176-c1cf26632c7b","value":"Elaborar relatório geral"},{"id":"e5dbaba6-ec6b-4445-9212-f828bb58a78c","value":"Iniciar relacionamento"},{"id":"4677532d-dcc9-4412-bbc0-16be00a4d71f","value":"Acompanhar a realização de Palestras"},{"id":"bc08f793-2b80-4de9-9d70-de724175f66b","value":"Entregar méritos acadêmicos"},{"id":"d2a38c59-c95d-439c-901b-1355367d9510","value":"Entrega de CIP recém-formado"},{"id":"f47cdc7c-0a8c-47c4-b706-cb7736c0ccb2","value":"IES"},{"id":"43d88063-959e-4344-860b-9ae4b8a187ee","value":"REPRESENTANTE"}]},{"containerId":"b9dd837c-b578-49e9-868c-b9f8e1882497","containerName":"Credenciar Representante do CRA-SP","isSubprocess":false,"elements":[{"id":"08a0ab64-23dd-4192-8376-f8894d7042a2","value":"REPRESENTANTE"},{"id":"a517dcfd-8f5b-4e9c-9dfc-c97e2755cf61","value":"CREDENCIAR REPRESENTANTE DO CRA-SP"},{"id":"67a15136-75b8-4bd0-ae36-d6c76eb70799","value":"REL. ACADÊMICO / ANALISTA"},{"id":"cc5bd823-f2ad-4f4c-9eb2-65c2ba4edae2","value":"REL. ACADÊMICO / ANALISTA"},{"id":"332e52bd-4674-49ea-9a87-1701f87e2b4c","value":"PLENÁRIO / CONSELHEIRO"},{"id":"8bdb966c-9dc9-4e2e-a228-8d827a252693","value":"Aguardar\nminuta"},{"id":"40035c91-e65a-4a0c-96c0-840e751c4272","value":"Termo de\nvoluntariado"},{"id":"5c9f0ef0-2198-4423-bb09-a9a6cce2304a","value":"Credencial enviada"},{"id":"ec87a1db-95bd-4a23-a412-698cc8e52995","value":"Enviar negativa com agradecimento "},{"id":"63b4fafc-bff9-4f06-818a-46b0abbdbb4b","value":""},{"id":"596a84b1-4550-4bc2-8bed-1d4cd16d6513","value":"Emitir credencial"},{"id":"ffdd3dd2-520e-4bf7-8c73-f28c3d922333","value":""},{"id":"886555c6-a615-46cf-bba8-733e0c634006","value":"Aprovar nomeação"},{"id":"213a543c-d3fc-4274-ab08-6db8110c50da","value":"Enviar termo para o representante"},{"id":"65075692-dbba-4799-b5fd-663fa88795b0","value":"Analisar requisitos"},{"id":"73f09a4e-1062-443e-8ea3-e540c56ccb42","value":"Acompanhar retorno dos convites"},{"id":"b86ccc00-3ad2-48b2-81ee-d063ff0418ac","value":"Abrir credenciamento, envio de convites"},{"id":"b92e5308-66be-4c9d-af0c-b9b25c626b06","value":"Analisar se está apto."},{"id":"b58ff04f-9928-4fcb-8a30-9e25fbf3ae72","value":"Fazer minuta para nomeação"},{"id":"683d78bb-98d2-41b3-9da7-d76b58642e4e"}]}]}