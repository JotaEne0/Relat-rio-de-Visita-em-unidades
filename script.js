const checklistContainer = document.getElementById("checklist-seção1");
const relatorioElement = document.getElementById("relatorio");
const form = document.getElementById("relatorio-form");
const exportButton = document.getElementById("exportar");

// Carregar perguntas dinamicamente
const perguntas = [
    {
        secaoId: "checklist-seção1",
        categoria: "1.1 Estrutura e Organização",
        itens: [
            { id: "placa_unidade", texto: "• A PLACA DA UNIDADE ESTÁ EM BOM ESTADO DE CONSERVAÇÃO E ATUALIZADA DE ACORDO COM O MANUAL DE IDENTIDADE VISUAL DE ASCOM?" },
            { id: "identificacao_salas", texto: "• HÁ IDENTIFICAÇÃO E NUMERAÇÃO DAS SALAS E CONSULTÓRIOS DE ACORDO COM O MANUAL DE IDENTIDADE VISUAL DE ASCOM?" },
        ]
    },
    {
        secaoId: "checklist-seção1",
        categoria: "1.2 Painel de informação",
        itens: [
            { id: "painel_informaçao", texto: "• HÁ PAINEL DE INFORMAÇÕES VISÍVEL PRÓXIMO À ENTRADA OU RECEPÇÃO?" },
            { id: "conselho_gestor", texto: "• HÁ IDENTIFICAÇÃO DOS INTEGRANTES DO CONSELHO GESTOR, POR SEGMENTO?" },
            { id: "cronograma_anual", texto: "• HÁ CRONOGRAMA ANUAL DE REUNIÕES DO CONSELHO GESTOR DISPONÍVEL?" },
            { id: "profissionais_horario", texto: "• HÁ RELAÇÃO NOMINAL DE TODOS OS PROFISSIONAIS COM FUNÇÃO E HORÁRIO DE TRABALHO?" },
            { id: "grupos_livres", texto: "• HÁ RELAÇÃO DE GRUPOS DISPONÍVEIS NA UNIDADE COM IDENTIFICAÇÃO DOS GRUPOS LIVRES E ACESSO AOS DEMAIS GRUPOS?" },
            { id: "cardapio_unidade", texto: "• HÁ CARDÁPIO COM TODOS OS SERVIÇOS DISPONÍVEIS DA UNIDADE?" },
            { id: "nome_gerente", texto: "• HÁ INFORMAÇÃO EM DESTAQUE COM O NOME DO GERENTE?" },
            { id: "horario_unidade", texto: "• HÁ INFORMAÇÃO SOBRE O HORÁRIO DE FUNCIONAMENTO DA UNIDADE?" },
            { id: "telefone_unidade", texto: "• HÁ INFORMAÇÃO SOBRE O TELEFONE DA UNIDADE?" },
            { id: "certificado_resposaveis", texto: "• HÁ CERTIFICADO DOS RESPONSÁVEIS TÉCNICOS (MÉDICO, FARMACÊUTICO, CIRURGIÃO-DENTISTA, ENFERMEIRO, OUTROS)?" },
            { id: "comprovante_limpeza", texto: "• HÁ COMPROVANTE DE LIMPEZA DE CAIXA D'AGUA DENTRO DA VALIDADE?" },
            { id: "controle_pragas", texto: "• HÁ COMPROVANTE DE CONTROLE DE PRAGAS (DESINSETIZAÇÃO E DESRATIZAÇÃO) DENTRO DA VALIDADE?" },
            { id: "cadastro_vigilancia", texto: "• HÁ CERTIFICADO DE CADASTRO MUNICIPAL DE VIGILÂNCIA EM SAÚDE?" },
            { id: "alvara_vistoria", texto: "• HÁ ALVARÁ DE VISTORIA DO CORPO DE BOMBEIRO DENTRO DA VALIDADE?" },
            { id: "comprovante_limpeza", texto: "• HÁ COMPROVANTE DE LIMPEZA DE CAIXA D'AGUA DENTRO DA VALIDADE?" },
            { id: "brigada_incendio", texto: "• HÁ IDENTIFICAÇÃO DA BRIGADA DE INCÊNDIO?" },
            { id: "placa_nome_social", texto: "• HÁ PLACA/INFORMATIVO DE INSTRUÇÃO SOBRE O RESPEITO AO NOME SOCIAL?" }
        ]
    },
    {
        secaoId: "checklist-seção1",
        categoria: "1.3 Placas de Comunicação",
        itens: [
            {id: "placa_fumar", texto: "• HÁ PLACA/INFORMATIVO RELATIVOS À PROIBIÇÃO DE FUMAR?"},
            {id: "atendimento_prioritario", texto: "• HÁ PLACA/INFORMATIVO DE ATENDIMENTO PRIORITÁRIO, CONFORME MANUAL DE IDENTIDADE VISUAL DE ASCOM? "},
            {id: "placa_adoção", texto: "• HÁ PLACA/INFORMATIVO COM INFORMAÇÕES SOBRE A ADOÇÃO DE NASCITURO? "},
            {id: "placa_ouvidoria", texto: "• HÁ PLACA/INFORMATIVO COM O TELEFONE DA OUVIDORIA (156) VISÍVIL E DESTACADA COMO CANAL OFICIAL PARA ENCAMINHAMENTO DE RECLAMAÇÕES, SUGESTÕES E DENÚNCIAS?"}
            ]
    },
    {
        secaoId: "checklist-seção1",
        categoria: "1.4 Sanitários",
        itens: [
            {id: "ambiente_limpo", texto: "• HÁ AMBIENTE LIMPO E ORGANIZADO COM REGISTRO DE LIMPEZA ATUALIZADO? "},
            {id: "lixeira_pedal", texto: "• HÁ LIXEIRA PROVIDA DE PEDAL E TAMPA ADEQUADAMENTE IDENTIFICADA, CONFORME RDC Nº 222/2018?"},
            {id: "itens_higiene", texto: "• HÁ ITENS DE HIGIENE DISPONÍVEIS NOS BANHEIROS?"},
            {id: "dispensa_abastecida", texto: "• HÁ DISPENSER E SUPORTES EM QUANTIDADE SUFICIENTE, ABASTECIDOS E FUNCIONANDO?"},
            {id: "assento_vasos", texto: "• HÁ ASSENTO NOS VASOS SANITÁRIOS?"},
            {id: "porta_trinco", texto: "• HÁ PORTAS COM TRINCOS/FECHADURAS FUNCIONANDO?"},
            {id: "banheiro_pcd", texto: "• HÁ BANHEIRO PARA PESSOA COM DEFICIÊNCIA COMPLETO (BACIA MAIS ALTA, BARRAS AO LADO E NA PIA, TORNEIRA ACESSÍVEL E CAMPAINHA FUNCIONANDO)? O BANHEIRO ESTÁ SEMPRE DISPONÍVEL COM LIVRE ACESSO?"}
        ]
    },
    {
        secaoId: "checklist-seção1",
        categoria: "1.5 Consultórios",
        itens: [
            {id: "ambiente_limpo_consultorio", texto: "• HÁ AMBIENTE LIMPO E ORGANIZADO COM REGISTRO DE LIMPEZA ATUALIZADO? "},
            {id: "pia_torneira", texto: "• HÁ PIA COM TORNEIRA, PREFERENCIALMENTE COM ACIONAMENTO POR PEDAL OU OUTRO MECANISMO QUE EVITE A CONTAMINAÇÃO DAS MÃOS?"},
            {id: "dispenser_funcionando", texto: "• HÁ DISPENSER E SUPORTES EM QUANTIDADE SUFICIENTE E FUNCIONANDO?"},
            {id: "lixeira_consultorio", texto: "• HÁ LIXEIRA PROVIDA DE PEDAL E TAMPA ADEQUADAMENTE IDENTIFICADA, CONFORME RDC Nº 222/2018?"},
            {id: "almotolias_consultorio", texto: "• HÁ ALMOTOLIAS E FRASCOS IDENTIFICADOS COM DATA DE ABERTURA E VALIDADE?"},
            {id: "ventilação_consultorio", texto: "• HÁ VENTILAÇÃO E ILUMINAÇÃO SUFICIENTES E ADEQUADAS?"},
            {id: "telas_janelas_consultorio", texto: "• HÁ TELAS MILIMÉTRICAS EM TODAS AS JANELAS?"},
            {id: "mobilia_estado_consultorio", texto: "• Á MOBILIÁRIO EM BOM ESTADO?"},
            {id: "longarinas_consultorio", texto: "• HÁ LONGARINAS, POLTRONAS E MACAS COM ESTOFAMENTO LAVÁVEL E ÍNTEGRO?"},
            {id: "pisos_lavaveis_consultorio", texto: "• HÁ PISOS E PAREDES COM REVESTIMENTOS QUE SEJAM LAVÁVEIS, OU SEJA, RESISTENTES A LIMPEZA COM ÁGUA E SABÃO?"},
            {id: "maca_consultorio", texto: "• HÁ MACA OU DIVÃ COM PAPEL LENÇOL?"},
            {id: "mesa_cadeira_consultorio", texto: "• HÁ MESA, 3 CADEIRAS (2) PARA USUÁRIOS, ESCADA DE 2 DEGRAUS, BALANÇA, ESTADIÔMETRO, FITA MÉTRICA, ESFIGMOMANÔMETRO, ESTETOSCÓPIO, DIVÃ/MACA?"},
            {id: "impressor_padronizados_consultorios", texto: "• HÁ IMPRESSOS PADRONIZADOS E OFICIAIS DISPONÍVEIS E ORGANIZADOS? (SADT, RECEITUÁRIO, REFERÊNCIA E CONTRARREFERÊNCIA)"},
            {id: "fichas_notificação_consultorio", texto: "• AS FICHAS DE NOTIFICAÇÃO COMPULSÓRIA E DEMAIS INSTRUMENTOS DE REGISTRO DA VIGILÂNCIA ESTÃO DISPONÍVEIS E DE FÁCIL ACESSO AOS PROFISSIONAIS?"},
            {id: "ambiente_livre_consultorio", texto: "• HÁ AMBIENTE LIVRE DE OBJETOS PESSOAIS EXPOSTOS?"}
        ]
    },
    {
        secaoId: "checklist-seção1",
        categoria: "1.6 Copa",
        itens: [
            {id: "ambiente_limpo_copa", texto: "• HÁ AMBIENTE LIMPO E ORGANIZADO COM REGISTRO DE LIMPEZA ATUALIZADO?"},
            {id: "lixeira_copa", texto: "• HÁ LIXEIRA PROVIDA DE PEDAL E TAMPA ADEQUADAMENTE IDENTIFICADA, CONFORME RDC Nº 222/2018?"},
            {id: "dispenser_copa", texto: "• HÁ DISPENSER E SUPORTES EM QUANTIDADE SUFICIENTE E FUNCIONANDO?"},
            {id: "papel_toalha_copa", texto: "• HÁ PAPEL TOALHA E DETERGENTE DISPONÍVEIS? "},
            {id: "limpeza_geladeira_copa", texto: "• HÁ REGISTRO DE LIMPEZA DA GELADEIRA?"},
            {id: "purificador_agua_copa", texto: "• HÁ DATA DE MANUTENÇÃO DO FILTRO/PURIFICADOR DE ÁGUA DENTRO DA VALIDADE? "},
        ]
    },
    {
        secaoId: "checklist-seção1",
        categoria: "1.7 DML",
        itens: [
            {id: "ambiente_limpo_dml", texto: "• HÁ AMBIENTE LIMPO E ORGANIZADO COM REGISTRO DE LIMPEZA ATUALIZADO?"},
            {id: "lixeira_dml", texto: "• HÁ LIXEIRA PROVIDA DE PEDAL E TAMPA ADEQUADAMENTE IDENTIFICADA, CONFORME RDC Nº 222/2018?"},
            {id: "utensiolios_dml", texto: "• HÁ DML COM UTENSÍLIOS DE LIMPEZA ORGANIZADOS?"},
            {id: "ficha_limpeza_dml", texto: "• HÁ FICHA TÉCNICA DOS MATERIAIS DE LIMPEZA?"},
            {id: "diluiçao_dml", texto: "• HÁ POP PARA DILUIÇÃO DE PRODUTOS?"},
            {id: "cronograma_limpeza_dml", texto: "• HÁ CRONOGRAMA GERAL DE LIMPEZA CONCORRENTE E TERMINAL?"},
            {id: "capacitaçao_profissionais_dml", texto: "• HÁ REGISTRO DE TREINAMENTO/CAPACITAÇÃO DOS PROFISSIONAIS?"},
            {id: "epi_dml", texto: "• HÁ EPI DISPONÍVEIS EM QUANTIDADE SUFICIENTES?"}
        ]
    },
    {
        secaoId: "checklist-seção1",
        categoria: "1.8 Organização Geral",
        itens: [
            {id: "pintura_interna_orgeral", texto: "• HÁ PINTURA INTERNA E EXTERNA PADRONIZADA DE ACORDO COM MANUAL DE IDENTIDADE VISUAL DE ASCOM?"},
            {id: "pintura_externaboa_orgeral", texto: "• A PINTURA INTERNA E EXTERNA ENCONTRAM-SE EM BOA CONDIÇÃO GERAL?"},
            {id: "limpeza_externa_orgeral", texto: "• LIMPEZA EXTERNA ESTÁ ADEQUADA?"},
            {id: "cronograma_limpeza_orgeral", texto: "• HÁ CRONOGRAMA DE LIMPEZA DE CALHAS, VIDROS E JARDINAGEM?"},
            {id: "cartazes_orgeral", texto: "• HÁ CARTAZES E/OU INFORMATIVOS EM GERAL ATUALIZADOS E EM PAINEIS OU SUPORTES ADEQUADOS?"}
        ]
    },
    {
        secaoId: "checklist-seção1",
        categoria: "1.9 Acessibilidade",
        itens: [
            {id: "acessibilidade_pcd_acessibilidade", texto: "• HÁ ACESSIBILIDADE A TODOS OS SERVIÇOS PARA PESSOAS COM DEFICIÊNCIA OU COM MOBILIDADE REDUZIDA ?"},
            {id: "piso_tatil_", texto: "• HÁ PISO TÁTIL EM BOM ESTADO?"}
        ]
    },
    {
        secaoId: "checklist-seção1",
        categoria: "1.10 Outras Questões",
        itens: [
            {id: "fraldario_outrasquestoes", texto: "• HÁ LOCAL PARA TROCADOR (FRALDÁRIO)?"},
            {id: "extintores_outrasquestoes", texto: "• HÁ EXTINTORES EM LOCAL ADEQUADO E DENTRO DA VALIDADE? "},
            {id: "rotas_fuga_outrasquestoes", texto: "• HÁ IDENTIFICAÇÃO DE ROTAS DE FUGA?"},
            {id: "bebedouro_outrasquestoes", texto: "• HÁ BEBEDOURO PARA OS USUÁRIOS FUNCIONANDO E COM MANUTENÇÃO PREVENTIVA ATUALIZADA? "},
            {id: "ventilação_outrasquestoes", texto: "• HÁ VENTILAÇÃO E ILUMINAÇÃO SUFICIENTES E ADEQUADAS?"},
            {id: "telas_outrasquestoes", texto: "• HÁ TELAS MILIMÉTRICAS EM TODAS AS JANELAS?"},
            {id: "local_residuos_outrasquestoes", texto: "• HÁ LOCAL FECHADO E ADEQUADO PARA RESÍDUOS, DE ACORDO COM A RDC 222/2018?"},
            {id: "pisos_lavaveis_outrasquestoes", texto: "• HÁ PISOS E PAREDES COM REVESTIMENTOS QUE SEJAM LAVÁVEIS, OU SEJA, RESISTENTES A LIMPEZA COM ÁGUA E SABÃO?"},
            {id: "dispenser_outrosquestoes", texto: "• HÁ DISPENSER FUNCIONANDO E ABASTECIDO DE ÁLCOOL ESPUMA 70% NOS CORREDORES PARA ANTISSEPSIA? "},
            {id: "mobiliario_outrasquestoes", texto: "• HÁ MOBILIÁRIO EM BOM ESTADO?"},
            {id: "longarinas_outrasquestoes", texto: "• HÁ LONGARINAS, POLTRONAS E MACAS COM ESTOFAMENTO LAVÁVEL E ÍNTEGRO?"},
            {id: "area_gases_outrasquestoes", texto: "• HA ÁREA DE GASES DEVIDAMENTE LOCALIZADA, COM CILINDROS ANCORADOS E PROTEGIDOS POR GRADES? "},
            {id: "armarios_outrasquestoes", texto: "• HÁ ÁRMARIOS PARA OS PROFISSIONAIS GUARDAREM OS SEUS PERTENCES?"},
            {id: "area_coletiva_outrasquestoes", texto: "• HÁ ÁREA ADEQUADA PARA ATIVIDADES COLETIVAS (EDUCATIVAS, PRÁTICAS FÍSICAS, PICS)?"}
        ]
    },
    {
        secaoId: "checklist-seção2",
        categoria: "2 Recepção, Prontuário, Same",
        itens: [
            {id: "ambiente_limpo_recpeçãoSAME", texto: "• HÁ AMBIENTE LIMPO E ORGANIZADO COM REGISTRO DE LIMPEZA ATUALIZADO?"},
            {id: "lixeira_pedal_recpeçãoSAME", texto: "• HÁ LIXEIRA PROVIDA DE PEDAL E TAMPA ADEQUADAMENTE IDENTIFICADA, CONFORME RDC Nº 222/2018?"},
            {id: "ventilação_recpeçãoSAME", texto: "• HÁ VENTILAÇÃO E ILUMINAÇÃO SUFICIENTES E ADEQUADAS?"},
            {id: "monitoramento_temperatura_recpeçãoSAME", texto: "HÁ MONITORAMENTO DE TEMPERATURA E HUMIDADE (TERMOHIGRÔMETRO)?"},
            {id: "mobiliario_recpeçãoSAME", texto: "• HÁ MOBILIÁRIO EM BOM ESTADO?"},
            {id: "longarinas_recpeçãoSAME", texto: "• HÁ LONGARINAS, POLTRONAS E MACAS COM ESTOFAMENTO LAVÁVEL E ÍNTEGRO?"},
            {id: "pisos_lavaveis_recpeçãoSAME", texto: "• HÁ PISOS E PAREDES COM REVESTIMENTOS QUE SEJAM LAVÁVEIS, OU SEJA, RESISTENTES A LIMPEZA COM ÁGUA E SABÃO?"},
            {id: "controle_acesso_same_recpeçãoSAME", texto: "• HÁ CONTROLE DE ACESSO AO SAME?"},
            {id: "protuarios_fisicos_recpeçãoSAME", texto: "• HÁ PRONTUÁRIOS FÍSICOS ORGANIZADOS ADEQUADAMENTE?"},
            {id: "prontuarios_estado_recpeçãoSAME", texto: "• HÁ PRONTUÁRIOS FÍSICOS EM BOM ESTADO DE CONSERVAÇÃO?"},
            {id: "registro_prontuario_recpeçãoSAME", texto: "• HÁ REGISTRO DE INATIVAÇÃO (ARQUIVO MORTO) DE PRONTUÁRIOS? "},
            {id: "fluxo_movimentação_recpeçãoSAME", texto: "• HÁ FLUXO DE MOVIMENTAÇÃO DE PRONTUÁRIOS (RASTREABILIDADE)? "},
            {id: "balcao_atendimento_recpeçãoSAME", texto: "• BALCÃO DE ATENDIMENTO É ORGANIZADO E LIVRE DE OBJETOS PESSOAIS?"},
            {id: "cadeiras_atendimento_recpeçãoSAME", texto: "• HÁ CADEIRAS NOS BALCÕES PARA ATENDIMENTO AO USUÁRIO? "},
            {id: "rotina_cadastral_recpeçãoSAME", texto: "• HÁ ROTINA DE ATUALIZAÇÃO DE DADOS CADASTRAIS DO USUÁRIO?"},
            {id: "unidade_agendafacil_recpeçãoSAME", texto: "• A UNIDADE DISPONIBILIZA VAGAS PARA O AGENDA FÁCIL?"},
            {id: "plano_contigencia_recpeçãoSAME", texto: "• HÁ PLANO DE CONTINGÊNCIA PARA QUEDAS DE ENERGIA E DE INTERNET?"},
            {id: "unidade_atendimento_presencial_recpeçãoSAME", texto: "• A UNIDADE REALIZA ATENDIMENTO PREFERENCIAL, DE ACORDO COM A LEGISLAÇÃO VIGENTE?"},
        ]
    },
    {
        secaoId: "checklist-seção3",
        categoria: "3 Bens Patrimoniais Móveis",
        itens: [
            {id: "bens_inserviveis_patrimoniais", texto: "• OS FLUXOS RELACIONADOS AOS BENS INSERVÍVEIS ESTÃO SENDO SEGUIDOS?"},
            {id: "inventario_periodico_patrimoniais", texto: "• REALIZA INVENTÁRIO PERIODICAMENTE?"},
            {id: "registro_movimentação_patrimoniais", texto: "• HÁ REGISTROS DE MOVIMENTAÇÃO DE BENS PATRIMONIAIS?"},
            {id: "bens_inserviveis_SEI_patrimoniais", texto: "• NO CASO DE EXISTÊNCIA DE BENS INSERVÍVEIS PARA RETIRADA, HÁ PROCESSO SEI INSTRUÍDO?"},
            {id: "bens_inserviveis_separados_patrimoniais", texto: "• NO CASO DE EXISTÊNCIA DE BENS INSERVÍVEIS PARA RETIRADA, ESTÃO SEPARADOS, IDENTIFICADOS E ACOMODADOS ADEQUADAMENTE?"},
            {id: "bens_identificados_patrimoniais", texto: "• OS BENS PATRIMONIAIS ESTÃO COM IDENTIFICAÇÃO ATUALIZADAS (NÃO HÁ PLACA DE IDENTIFICAÇÃO DE OUTRO PARCEIRO?)"}
        ]
    },
    {
        secaoId: "checklist-seção4",
        categoria: "4 Acesso e Acolhimento",
        itens: [
            {id: "demanda_unidade_acolhimento", texto: "• HÁ ACOLHIMENTO E ATENDIMENTO À DEMANDA ESPONTÂNEA DURANTE TODO O HORÁRIO DE FUNCIONAMENTO DA UNIDADE?"},
            {id: "profissionais_superior_acolhimento", texto: "• TODOS OS PROFISSIONAIS DE NÍVEL SUPERIOR UTILIZAM AGENDA NO SIGA SAÚDE?"},
            {id: "agendas_configuradas_acolhimento", texto: "• AS AGENDAS ESTÃO CONFIGURADAS CONFORME AS DIRETRIZES DA SMS (TEMPO DE LIBERAÇÃO, REPOSIÇÃO DE VAGAS, IMPEDIMENTOS, GRUPOS, VIGÊNCIA, HORÁRIO DE ATENDIMENTO)?"},
            {id: "unidade_siga_atendimento_acolhimento", texto: "• A UNIDADE INSERE NO SIGA EM TEMPO REAL O ATENDIMENTO REALIZADO POR DEMANDA ESPONTÂNEA?"},
            {id: "orientação_fluxo_unidade_acolhimento", texto: "• HÁ ORIENTAÇÃO AOS USUÁRIOS SOBRE OS FLUXOS DE ATENDIMENTO DA UNIDADE?"},
            {id: "organização_fila_acolhimento", texto: "• HÁ ORGANIZAÇÃO DA FILA DE ENTRADA DOS USUÁRIOS E DIRECIONAMENTO AOS SETORES DA UNIDADE?"}
        ]
    },
     {
        secaoId: "checklist-seção5",
        categoria: "5 RH",
        itens: [
            {id: "deficit_medica_rh", texto: "• HÁ DÉFICIT DE RH NA CATEGORIA MÉDICA?"},
            {id: "deficit_equipe_multiprofiossional_rh", texto: "• HÁ DÉFICIT DE RH NA CATEGORIA DE EQUIPE MULTIPROFISSIONAL?"},
            {id: "deficit_saude_bucal_rh", texto: "• HÁ DÉFICIT DE RH NA CATEGORIA DE SAÚDE BUCAL?"},
            {id: "deficit_enfermagem_rh", texto: "• HÁ DÉFICIT DE RH NA CATEGORIA DA ENFERMAGEM?"},
            {id: "deficit_administrativo_rh", texto: "• HÁ DÉFICIT DE RH NA CATEGORIA DE ADMINISRATIVOS?"},
            {id: "organização_fila_unidade_rh", texto: "• HÁ ORGANIZAÇÃO DA FILA DE ENTRADA DOS USUÁRIOS E DIRECIONAMENTO AOS SETORES DA UNIDADE?"},
            {id: "deficit_outra_categoria_rh", texto: "• HÁ DÉFICIT DE RH EM OUTRA CATEGORIA?"},
            {id: "cobertura_profissional_afastado_rh", texto: "• HÁ COBERTURA PARA OS PROFISSIONAIS QUE ESTÃO AFASTADOS? "},
            {id: "profissionais_pj_rh", texto: "• HÁ PROFISSIONAIS CONTRATADOS COMO PJ? "},
            {id: "data_visita_profissional_rh", texto: "• NA DATA DA VISITA A FREQUÊNCIA DOS PROFISSIONAIS ESTAVA APONTADA REGULARMENTE?"},
            {id: "escala_profissionais_rh", texto: "• HÁ ESCALA DE PROFISSIONAIS? "},
            {id: "epi_necessario_rh", texto: "• FAZ-SE USO DE EPI NECESSÁRIOS?"},
            {id: "controle_entrega_rh", texto: "• FAZ-SE CONTROLE DE ENTREGA DE EPI?"},
            {id: "uniformes_desprovidos_adornos_rh", texto: "• FAZ-SE USO ADEQUADO DE UNIFORMES DESPROVIDOS DE ADORNOS?"},
            {id: "avental_sms_parceiro_rh", texto: "• FAZ USO DE AVENTAL COM LOGO DE SMS E DA INSTITUIÇÃO PARCEIRO (SE ADM. INDIRETA) ?"},
            {id: "cracha_identificação_rh", texto: "• FAZ-SE USO DE CRACHÁ DE IDENTIFICAÇÃO?"},
            {id: "notificação_acidente_unidade_rh", texto: "• FAZ-SE NOTIFICAÇÃO DE ACIDENTE DE TRABALHO DA UNIDADE?"}
        ]
    },
    {
        secaoId: "checklist-seção6",
        categoria: "6 Saúde Bucal",
        itens: [
            { id: "ventilacao_iluminacao_suficiente_saude_bucal", texto: "• HÁ VENTILAÇÃO E ILUMINAÇÃO SUFICIENTES E ADEQUADAS?" },
            { id: "lixeira_pedal_tampa_rdc222_saude_bucal", texto: "• HÁ LIXEIRA PROVIDA DE PEDAL E TAMPA ADEQUADAMENTE IDENTIFICADA, CONFORME RDC Nº 222/2018?" },
            { id: "dispenser_suportes_abastecidos_saude_bucal", texto: "• HÁ DISPENSER E SUPORTES EM QUANTIDADE SUFICIENTE, ABASTECIDOS E FUNCIONANDO?" },
            { id: "ambiente_limpo_organizado_saude_bucal", texto: "• HÁ AMBIENTE LIMPO E ORGANIZADO COM REGISTRO DE LIMPEZA ATUALIZADO?" },
            { id: "consultorio_odontologico_barreira_saude_bucal", texto: "• HÁ CONSULTÓRIO ODONTOLÓGICO ADEQUADO QUANTO À INDIVIDUALIZAÇÃO DO ESPAÇO DAS CADEIRAS ODONTOLÓGICAS, ATRAVÉS DE BARREIRA FÍSICA DO CHÃO AO TETO?" },
            { id: "tcle_assinado_saude_bucal", texto: "• HÁ TCLE ASSINADO PELO PACIENTE /OU RESPONSÁVEL?" },
            { id: "material_esterilizado_armazenado_saude_bucal", texto: "• O MATERIAL ESTERILIZADO ENCONTRA-SE ARMAZENADO EM LOCAL APROPRIADO?" },
            { id: "material_esterilizado_identificacao_saude_bucal", texto: "• O MATERIAL ESTERILIZADO ENCONTRA-SE DEVIDAMENTE IDENTIFICADO COM DADOS DE RASTREABILIDADE (DATA DE ESTERILIZAÇÃO, VALIDADE E RESPONSÁVEL)?" },
            { id: "caixa_residuo_perfurocortante_saude_bucal", texto: "• HÁ CAIXA PARA RESÍDUO PÉRFURO CORTANTE E SUPORTE?" },
            { id: "identificacao_data_insumos_saude_bucal", texto: "• HÁ IDENTIFICAÇÃO DA DATA DE ABERTURA DOS INSUMOS?" },
            { id: "rastreamento_insumos_acondicionados_saude_bucal", texto: "• OS INSUMOS (EX. GESSO), ACONDICIONADOS EM RECIPIENTES QUE NÃO OS SEUS DE ORIGEM, POSSUEM DADOS QUE PERMITAM A SUA RASTREABILIDADE (FORNECEDOR, LOTE, VALIDADE)?" },
            { id: "triagem_classificacao_risco_saude_bucal", texto: "• HÁ REALIZAÇÃO DE TRIAGEM DE CLASSIFICAÇÃO DE RISCO PARA ACESSO AO TRATAMENTO ODONTOLÓGICO REGULARMENTE A CADA SETE OU DEZ DIAS?" },
            { id: "documentos_tecnicos_saude_bucal", texto: "• OS PROFISSIONAIS TEM CONHECIMENTO E UTILIZAM OS DOCUMENTOS TÉCNICOS DE SAÚDE BUCAL DA ATENÇÃO BÁSICA DA SMS, EM ESPECIAL O DE SEGURANÇA DO PACIENTE NA SAÚDE BUCAL?" },
            { id: "dentistas_realizam_protese_saude_bucal", texto: "• TODOS OS DENTISTAS DA UNIDADE REALIZAM PRÓTESE DENTÁRIA?" }
        ]
        
    },
    {
        secaoId: "checklist-seção7",
        categoria: "7 Documentação",
        itens: [
            { id: "laudo_cmvs_alvara_sanitario_documentação", texto: "• HÁ LAUDO CMVS – ALVARÁ SANITÁRIO?" },
            { id: "laudos_atualizados_avcb_documentação", texto: "• HÁ LAUDOS ATUALIZADOS DE AVCB?" },
            { id: "laudos_limpeza_caixa_agua_documentação", texto: "• HÁ LAUDOS ATUALIZADOS DE LIMPEZA DE CAIXA D'ÁGUA?" },
            { id: "laudos_potabilidade_agua_documentação", texto: "• HÁ LAUDOS ATUALIZADOS DE POTABILIDADE DA ÁGUA?" },
            { id: "laudos_dedetizacao_documentação", texto: "• HÁ LAUDOS ATUALIZADOS DE DEDETIZAÇÃO?" },
            { id: "pcmso_atualizado_documentação", texto: "• HÁ PCMSO ATUALIZADO - PROGRAMA DE CONTROLE MÉDICO DE SAÚDE OCUPACIONAL?" },
            { id: "pgrss_atualizado_documentação", texto: "• HÁ PGRSS ATUALIZADO - PLANO DE GERENCIAMENTO DE RESÍDUOS DO SERVIÇO DE SAÚDE?" },
            { id: "pgr_atualizado_documentação", texto: "• HÁ PGR ATUALIZADO - PROGRAMA DE GERENCIAMENTO DE RISCOS?" },
            { id: "livro_ocorrencias_documentação", texto: "• HÁ LIVRO DE OCORRÊNCIAS?" },
            { id: "controle_ordens_servico_documentação", texto: "• HÁ CONTROLE DE ORDENS DE SERVIÇOS ABERTAS COM REGISTRO DE ACOMPANHAMENTO?" },
            { id: "cronograma_manutencao_equipamentos_documentação", texto: "• HÁ CRONOGRAMA PARA MANUTENÇÕES PREVENTIVAS DE EQUIPAMENTOS MÉDICO ASSISTENCIAIS?" },
            { id: "registros_manutencoes_realizadas_documentação", texto: "• HÁ REGISTROS DAS MANUTENÇÕES CORRETIVAS/PREVENTIVAS REALIZADAS, INCLUINDO OS EQUIPAMENTOS DE AR CONDICIONADO, CÂMARAS DE REFRIGERAÇÃO ETC.?" },
            { id: "plano_contingencia_documentação", texto: "• HÁ PLANO DE CONTINGÊNCIA PARA ENERGIA ELÉTRICA, ABASTECIMENTO DE ÁGUA, INTERNET, QUEDA DE SISTEMA - INCLUSIVE EM HORÁRIO FORA DO EXPEDIENTE?" },
            { id: "caracterizacao_unidade_documentação", texto: "• HÁ CARACTERIZAÇÃO DA UNIDADE, INCLUINDO PERFIL EPIDEMIOLÓGICO?" },
            { id: "cadastro_amlurb_rdc222_documentação", texto: "• HÁ CADASTRO NA AMLURB EM CUMPRIMENTO À RDC Nº 222/2018?" },
            { id: "termos_contrato_terceiros_documentação", texto: "• A UNIDADE POSSUI OS TERMOS DE CONTRATO DE TERCEIROS?" },
            { id: "cronograma_limpeza_salas_documentação", texto: "• HÁ CRONOGRAMA DE LIMPEZA EM TODAS AS SALAS?" },
            { id: "cronograma_limpeza_vidros_documentação", texto: "• HÁ CRONOGRAMA DE LIMPEZA DE VIDROS, TOLDOS, LUMINÁRIAS E VENTILADORES?" },
            { id: "cadastro_cnes_atualizado_documentação", texto: "• O ESTABELECIMENTO ESTÁ INSCRITO E MANTÉM SEUS DADOS ATUALIZADOS NO CADASTRO NACIONAL DE ESTABELECIMENTOS DE SAÚDE – CNES?" },
            { id: "qualificacao_validacao_autoclaves_documentação", texto: "• POSSUI QUALIFICAÇÃO E VALIDAÇÃO DAS AUTOCLAVES?" },
            { id: "lista_mestra_equipamentos_calibraveis_documentação", texto: "• POSSUI UMA LISTA MESTRA COM TODOS OS EQUIPAMENTOS CALIBRÁVEIS DA UNIDADE?" },
            { id: "certificados_calibracao_equipamentos_documentação", texto: "• POSSUI OS CERTIFICADOS DE CALIBRAÇÃO DE TODOS OS EQUIPAMENTOS CALIBRÁVEIS DA UNIDADE?" },
            { id: "controle_documentos_funcionarios_documentação", texto: "• POSSUI CONTROLE COM CIÊNCIA DOS POP, MANUAIS, DIRETRIZES, PROTOCOLOS, COMUNICADOS E OUTROS DOCUMENTOS ENVIADOS AOS FUNCIONÁRIOS?" }
        ]
    },
    {
        secaoId: "checklist-seção8",
        categoria: "8 Assistência Farmacêutica",
        itens: [
            { id: "ambiente_limpo_organizado_farmacia", texto: "• HÁ AMBIENTE LIMPO E ORGANIZADO COM REGISTRO DE LIMPEZA ATUALIZADO?" },
            { id: "lixeira_pedal_tampa_identificada_farmacia", texto: "• HÁ LIXEIRA PROVIDA DE PEDAL E TAMPA ADEQUADAMENTE IDENTIFICADA, CONFORME RDC Nº 222/2018?" },
            { id: "dispenser_suportes_abastecidos_funcionando_farmacia", texto: "• HÁ DISPENSER E SUPORTES EM QUANTIDADE SUFICIENTE, ABASTECIDOS E FUNCIONANDO?" },
            { id: "local_armazenamento_injetaveis_farmacia", texto: "• HÁ LOCAL ESPECÍFICO E IDENTIFICADO PARA O ARMAZENAMENTO DE INJETÁVEIS?" },
            { id: "prateleiras_bins_suficientes_farmacia", texto: "• HÁ PRATELEIRAS E BINS SUFICIENTES PARA ARMAZENAGEM DE MEDICAMENTOS DE ACORDO COM A LEGISLAÇÃO VIGENTE?" },
            { id: "organizacao_validade_proxima_farmacia", texto: "• HÁ ORGANIZAÇÃO DE FORMA QUE SEJAM DISPENSADOS PRIORITARIAMENTE OS MEDICAMENTOS COM VALIDADE DE VENCIMENTO MAIS PRÓXIMA?" },
            { id: "medicamentos_afastados_piso_teto_paredes_farmacia", texto: "• OS MEDICAMENTOS E INSUMOS ESTÃO AFASTADOS DO PISO, TETO E PAREDES COM ESPAÇAMENTO QUE PERMITE A LIMPEZA ADEQUADA? POSSUEM IDENTIFICAÇÃO DOS ITENS, COM DESCRIÇÃO, LOTE E VALIDADE?" },
            { id: "prateleiras_bins_alfabetica_farmacia", texto: "• HÁ PRATELEIRAS E BINS ORGANIZADOS POR ORDEM ALFABÉTICA?" },
            { id: "identificacao_generica_bom_estado_farmacia", texto: "• HÁ IDENTIFICAÇÃO DOS MEDICAMENTOS COM DENOMINAÇÃO GENÉRICA EM BOM ESTADO (IDENTIFICAÇÃO POR CORES)?" },
            { id: "blisters_sem_amarracao_inapropriada_farmacia", texto: "• HÁ BLISTERS ISENTOS DE AMARRAÇÃO INAPROPRIADA QUE POSSA COMPROMETER A INTEGRIDADE DO MESMO (EX. ELÁSTICO)?" },
            { id: "farmacia_area_adjunta_sem_caixas_farmacia", texto: "• FARMÁCIA E ÁREA ADJACENTE ISENTA DE CAIXAS SECUNDÁRIAS E/OU TERCIÁRIAS QUE SÃO UTILIZADAS PARA TRANSPORTE DOS MEDICAMENTOS?" },
            { id: "termohigrometros_certificado_calibracao_farmacia", texto: "• TERMOHIGRÔMETROS POSSUEM CERTIFICADO DE CALIBRAÇÃO? ESTÃO VÁLIDOS?" },
            { id: "equipamento_ar_condicionado_funcionando_farmacia", texto: "• HÁ EQUIPAMENTO DE AR CONDICIONADO FUNCIONANDO?" },
            { id: "registro_dispensacao_gss_tempo_real_farmacia", texto: "• O REGISTRO DA DISPENSAÇÃO DE MEDICAMENTOS NO GSS OCORRE EM TEMPO REAL NA PRESENÇA DO USUÁRIO, COM EXCEÇÃO DOS CASOS DE INDISPONIBILIDADE DO SISTEMA?" },
            { id: "falta_medicamentos_unidade_farmacia", texto: "• HÁ FALTA DE ALGUM MEDICAMENTOS NA UNIDADE? EM CASO AFIRMATIVO, VERIFICAR PROVIDÊNCIAS QUANTO AO REMANEJAMENTO." },
            { id: "periodicidade_encerramento_movimentos_gss_farmacia", texto: "• QUANTO À PERIODICIDADE DE ENCERRAMENTO DOS MOVIMENTOS NA TELA DE “ESCRITURAÇÃO DE MEDICAMENTOS SUJEITOS A CONTROLE ESPECIAL” DO SISTEMA GSS: “SÃO REALIZADAS SEMANALMENTE?" },
            { id: "checklist_recebimento_medicamentos_materiais_farmacia", texto: "• REALIZA CHECK LIST DE RECEBIMENTO DE MEDICAMENTOS E MATERIAIS? MANTÉM REGISTRO?" },
            { id: "manual_diluicao_medicamentos_sms_farmacia", texto: "• HÁ MANUAL DE DILUIÇÃO DE MEDICAMENTOS DA SMS IMPRESSO NA FARMÁCIA, SALA DE MEDICAÇÃO, ODONTO, EMERGÊNCIA E OUTROS?" },
            { id: "consulta_farmaceutica_farmacia", texto: "• OS FARMACÊUTICOS REALIZAM CONSULTA FARMACÊUTICA?" },
            { id: "farmaceuticos_participam_grupos_farmacia", texto: "• OS FARMACÊUTICOS PARTICIPAM DE GRUPOS?" },
            { id: "relacao_medicamentos_dispensa_visivel_farmacia", texto: "• HÁ RELAÇÃO DE MEDICAMENTOS DE DISPENSAÇÃO VISÍVEL AO USUÁRIO - REMUME?" },
            { id: "revisao_periodica_cmm_farmacia", texto: "• HÁ REVISÃO PERIÓDICA DO CMM, CONSIDERANDO, INCLUSIVE, A SAZONALIDADE?" },
            { id: "medicamentos_termolabeis_armazenados_farmacia", texto: "• OS MEDICAMENTOS TERMOLÁBEIS ESTÃO ARMAZENADOS DE ACORDO COM PROCEDIMENTO OPERACIONAL PADRÃO VIGENTE? (NÃO ARMAZENAR NA PORTA)" },
            { id: "registro_diario_temperatura_umidade_farmacia", texto: "• HÁ REGISTRO DIÁRIO DE TEMPERATURA E UMIDADE DO AMBIENTE?" },
            { id: "identificacao_medicamentos_alto_risco_farmacia", texto: "• HÁ IDENTIFICAÇÃO (BARREIRA) PARA MEDICAMENTOS DE ALTO RISCO E/OU POTENCIALMENTE PERIGOSOS - MAR/MPP?" },
            { id: "medicamentos_controlados_portaria_344_farmacia", texto: "• HÁ MEDICAMENTOS CONTROLADOS ARMAZENADOS DE ACORDO COM A PORTARIA Nº MS 344/1998?" },
            { id: "monitoramento_validade_medicamentos_farmacia", texto: "• FAZ-SE MONITORAMENTO DA VALIDADE DOS MEDICAMENTOS?" },
            { id: "unitarizacao_medicamentos_legislacao_farmacia", texto: "• REALIZA UNITARIZAÇÃO DE MEDICAMENTOS DE ACORDO COM A LEGISLAÇÃO VIGENTE?" },
            { id: "controle_rastreabilidade_medicamentos_farmacia", texto: "• REALIZA CONTROLE E RASTREABILIDADE DE TODOS OS MEDICAMENTOS DA UNIDADE (EMERGÊNCIA, SALA DE MEDICAÇÃO, ODONTOLOGIA ETC.)?" },
            { id: "certidao_regularidade_crf_sp_farmacia", texto: "• HÁ CERTIDÃO DE REGULARIDADE EMITIDA PELO CRF-SP? SE SIM, ESTÁ VISÍVEL AOS USUÁRIOS?" },
            { id: "lista_medicamentos_inapropriados_idosos_farmacia", texto: "• HÁ LISTA DE MEDICAMENTOS INAPROPRIADOS PARA IDOSOS (SALA DO IDOSO E CONSULTÓRIOS)?" },
            { id: "controle_mensal_validades_emergencia_farmacia", texto: "• HÁ CONTROLE MENSAL DAS VALIDADES DOS MEDICAMENTOS DO CARRINHO DE EMERGÊNCIA JUNTO COM A EQUIPE DE ENFERMAGEM?" },
            { id: "pops_impressos_visiveis_farmacia", texto: "• OS POPS ESTÃO IMPRESSOS E VISÍVEIS AOS FUNCIONÁRIOS DO SETOR?" },
            { id: "pia_torneira_pedal_farmacia", texto: "• HÁ PIA COM TORNEIRA, PREFERENCIALMENTE COM ACIONAMENTO POR PEDAL OU OUTRO MECANISMO QUE EVITE A CONTAMINAÇÃO DAS MÃOS?" }
        ]
    },
    {
        secaoId: "checklist-seção9",
        categoria: "9 Almoxerife",
        itens: [
            { id: "ambiente_limpo_organizado_almoxarifado", texto: "• HÁ AMBIENTE LIMPO E ORGANIZADO COM REGISTRO DE LIMPEZA ATUALIZADO?" },
            { id: "lixeira_pedal_tampa_identificada_almoxarifado", texto: "• HÁ LIXEIRA PROVIDA DE PEDAL E TAMPA ADEQUADAMENTE IDENTIFICADA, CONFORME RDC Nº 222/2018?" },
            { id: "ventilacao_iluminacao_suficientes_almoxarifado", texto: "• HÁ VENTILAÇÃO E ILUMINAÇÃO SUFICIENTES E ADEQUADAS?" },
            { id: "telas_milimetricas_janelas_almoxarifado", texto: "• HÁ TELAS MILIMÉTRICAS EM TODAS AS JANELAS?" },
            { id: "mobiliario_bom_estado_almoxarifado", texto: "• HÁ MOBILIÁRIO EM BOM ESTADO?" },
            { id: "pisos_paredes_lavaveis_almoxarifado", texto: "• HÁ PISOS E PAREDES COM REVESTIMENTOS QUE SEJAM LAVÁVEIS, OU SEJA, RESISTENTES A LIMPEZA COM ÁGUA E SABÃO?" },
            { id: "prateleiras_bins_suficientes_almoxarifado", texto: "• HÁ PRATELEIRAS E BINS SUFICIENTES PARA ARMAZENAGEM DE MEDICAMENTOS DE ACORDO COM A LEGISLAÇÃO VIGENTE?" },
            { id: "boas_praticas_armazenamento_almoxarifado", texto: "• REALIZA BOAS PRÁTICAS DE ARMAZENAMENTO, INCLUINDO DISTANCIAMENTO DOS ITENS DE SOLO, PAREDES E TETO, INCLUINDO TAMBÉM IDENTIFICAÇÃO DO ITEM, COM DESCRIÇÃO, LOTE E VALIDADE?" },
            { id: "refrigerador_exclusivo_termolabeis_almoxarifado", texto: "• HÁ REFRIGERADOR PARA GUARDA EXCLUSIVA DE MEDICAMENTOS TERMOLÁBEIS COM CONTROLE DE TEMPERATURA DIÁRIA?" },
            { id: "termolabeis_armazenados_procedimento_almoxarifado", texto: "• OS MEDICAMENTOS TERMOLÁBEIS ESTÃO ARMAZENADOS DE ACORDO COM PROCEDIMENTO OPERACIONAL PADRÃO VIGENTE? (NÃO ARMAZENAR NA PORTA)" },
            { id: "registro_temperatura_umidade_almoxarifado", texto: "• HÁ REGISTRO DIÁRIO DE TEMPERATURA E UMIDADE DO AMBIENTE?" },
            { id: "identificacao_mar_mpp_almoxarifado", texto: "• HÁ IDENTIFICAÇÃO (BARREIRA) PARA MEDICAMENTOS DE ALTO RISCO E/ OU POTENCIALMENTE PERIGOSOS - MAR/MPP?" },
            { id: "revisao_periodica_cmm_almoxarifado", texto: "• HÁ REVISÃO PERIÓDICA DO CMM, CONSIDERANDO, INCLUSIVE, A SAZONALIDADE?" },
            { id: "controlados_portaria344_almoxarifado", texto: "• HÁ MEDICAMENTOS CONTROLADOS ARMAZENADOS DE ACORDO COM A PORTARIA 344/98?" },
            { id: "prateleiras_ordem_alfabetica_almoxarifado", texto: "• HÁ PRATELEIRAS E BINS ORGANIZADOS POR ORDEM ALFABÉTICA?" },
            { id: "monitoramento_validade_mmh_almoxarifado", texto: "• FAZ-SE MONITORAMENTO DA VALIDADE DOS MEDICAMENTOS E MATERIAIS MÉDICO HOSPITALARES?" },
            { id: "organizacao_dispensa_prioritaria_almoxarifado", texto: "• HÁ ORGANIZAÇÃO DE FORMA QUE SEJAM DISPENSADOS PRIORITARIAMENTE OS MEDICAMENTOS, INSUMOS E MATERIAIS COM VALIDADE DE VENCIMENTO MAIS PRÓXIMA?" },
            { id: "termohigrometro_calibracao_almoxarifado", texto: "• POSSUI TERMOHIGRÔMETRO COM CERTIFICADO DE CALIBRAÇÃO DENTRO DA VALIDADE?" },
            { id: "pops_impressos_visiveis_almoxarifado", texto: "• OS POPS ESTÃO IMPRESSOS E VISÍVEIS AOS FUNCIONÁRIOS DO SETOR?" },
            { id: "controle_falta_insumos_almoxarifado", texto: "• HÁ FALTA DE ALGUM INSUMO OU MMH? REALIZOU SOLICITAÇÃO DE REMANEJAMENTO À STS? MANTÉM REGISTRO?" },
            { id: "ar_condicionado_funcionando_almoxarifado", texto: "• HÁ EQUIPAMENTO DE AR CONDICIONADO FUNCIONANDO?" },
            { id: "checklist_recebimento_registro_almoxarifado", texto: "• REALIZA CHECK LIST DE RECEBIMENTO DE MEDICAMENTOS E MATERIAIS? MANTÉM REGISTRO?" }
        ]
    },
    {
        secaoId: "checklist-seção10",
        categoria: "10.1 Medicação",
        itens: [
            { id: "ambiente_limpo_organizado_medicacao_outros", texto: "• HÁ AMBIENTE LIMPO E ORGANIZADO COM REGISTRO DE LIMPEZA ATUALIZADO?" },
            { id: "pia_torneira_acionamento_pedal_medicacao_outros", texto: "• HÁ PIA COM TORNEIRA, PREFERENCIALMENTE COM ACIONAMENTO POR PEDAL OU OUTRO MECANISMO QUE EVITE A CONTAMINAÇÃO DAS MÃOS?" },
            { id: "dispenser_suportes_suficientes_medicacao_outros", texto: "• HÁ DISPENSER E SUPORTES EM QUANTIDADE SUFICIENTE, ABASTECIDOS E FUNCIONANDO?" },
            { id: "lixeira_pedal_tampa_identificada_medicacao_outros", texto: "• HÁ LIXEIRA PROVIDA DE PEDAL E TAMPA ADEQUADAMENTE IDENTIFICADA, CONFORME RDC Nº 222/2018?" },
            { id: "ralo_escamoteavel_medicacao_outros", texto: "• POSSUI RALO ESCAMOTEÁVEL?" },
            { id: "almotolias_frascos_identificados_medicacao_outros", texto: "• HÁ ALMOTOLIAS E FRASCOS IDENTIFICADOS COM DATA DE ABERTURA E VALIDADE, DEVIDAMENTE FECHADOS?" },
            { id: "ventilacao_iluminacao_suficientes_medicacao_outros", texto: "• HÁ VENTILAÇÃO E ILUMINAÇÃO SUFICIENTES E ADEQUADAS?" },
            { id: "telas_milimetricas_janelas_medicacao_outros", texto: "• HÁ TELAS MILIMÉTRICAS EM TODAS AS JANELAS?" },
            { id: "mobiliario_bom_estado_medicacao_outros", texto: "• HÁ MOBILIÁRIO EM BOM ESTADO?" },
            { id: "longarinas_poltronas_macas_medicacao_outros", texto: "• HÁ LONGARINAS, POLTRONAS E MACAS COM ESTOFAMENTO LAVÁVEL E ÍNTEGRO?" },
            { id: "pisos_paredes_lavaveis_medicacao_outros", texto: "• HÁ PISOS E PAREDES COM REVESTIMENTOS QUE SEJAM LAVÁVEIS, OU SEJA, RESISTENTES A LIMPEZA COM ÁGUA E SABÃO?" },
            { id: "checagem_identificacao_paciente_medicacao_outros", texto: "• HÁ CHECAGEM NA IDENTIFICAÇÃO DO PACIENTE ANTES DO PROCEDIMENTO COM DUPLO PARÂMETRO?" },
            { id: "registro_procedimentos_prontuario_medicacao_outros", texto: "• HÁ REGISTRO DOS PROCEDIMENTOS EM PRONTUÁRIO NO MOMENTO DA REALIZAÇÃO, GARANTINDO A RASTREABILIDADE ADEQUADA?" },
            { id: "caixas_perfurocortante_medicacao_outros", texto: "• HÁ CAIXAS DE PERFUROCORTANTE E SUPORTE ADEQUADAS E ATÉ LIMITE ESTABELECIDO?" },
            { id: "armazenamento_insumos_adequado_medicacao_outros", texto: "• HÁ ARMAZENAMENTO ADEQUADO DE INSUMOS?" },
            { id: "controle_insumos_validade_medicacao_outros", texto: "• OS INSUMOS SÃO CONTROLADOS ADEQUADAMENTE COM CONFERÊNCIA DE QUANTIDADE E VALIDADE, COM DADOS DE RASTREABILIDADE ADEQUADOS?" },
            { id: "instrumentais_esterilizados_condicoes_adequadas_medicacao_outros", texto: "• OS INSTRUMENTAIS ESTERELIZADOS SÃO ACONDICIONADOS EM CONDIÇÕES ADEQUADAS, COM DADOS DE RASTREABILIDADE ADEQUADOS?" },
            { id: "documentos_pops_atualizados_medicacao_outros", texto: "• HÁ DOCUMENTOS E POPS ATUALIZADOS DISPONÍVEIS AOS FUNCIONÁRIOS DO SETOR?" },
            { id: "equipe_enfermagem_epi_medicacao_outros", texto: "• A EQUIPE DE ENFERMAGEM UTILIZA EPI ADEQUADO?" },
            { id: "maca_diva_papel_lencol_medicacao_outros", texto: "• HÁ MACA OU DIVÃ COM PAPEL LENÇOL?" },
            { id: "equipamentos_condicoes_adequadas_medicacao_outros", texto: "• HÁ EQUIPAMENTOS EM CONDIÇÕES ADEQUADAS?" },
            { id: "equipamentos_calibracao_registro_medicacao_outros", texto: "• EQUIPAMENTOS SÃO CONFERIDOS PERIODICAMENTE E POSSUEM REGISTROS DE CALIBRAGEM?" },
            { id: "plano_contingencia_setor_medicacao_outros", texto: "• HÁ PLANO DE CONTINGÊNCIA DO SETOR?" },
            { id: "atendimentos_privacidade_paciente_medicacao_outros", texto: "• OS ATENDIMENTOS SÃO REALIZADOS EM LOCAL ADEQUADO PARA PRESERVAR A PRIVACIDADE DO PACIENTE?" },
            { id: "manual_diluicao_medicamentos_medicacao_outros", texto: "• HÁ MANUAL DE DILUIÇÃO DE MEDICAMENTOS ACESSÍVEL?" },
            { id: "mapa_risco_eventos_medicacao_outros", texto: "• HÁ MAPA DE RISCO, CONTEMPLANDO REGISTRO DE EVENTOS/REAÇÕES ADVERSAS DE MEDICAMENTOS ADMINISTRADOS?" }
        ]
    },
    {
        secaoId: "checklist-seção10",
        categoria: "10.2 Sala Multiuso/coleta",
        itens: [
            { id: "ambiente_limpo_organizado_sala_coleta_outro", texto: "• HÁ AMBIENTE LIMPO E ORGANIZADO COM REGISTRO DE LIMPEZA ATUALIZADO?" },
            { id: "pia_torneira_acionamento_pedal_sala_coleta_outro", texto: "• HÁ PIA COM TORNEIRA, PREFERENCIALMENTE COM ACIONAMENTO POR PEDAL OU OUTRO MECANISMO QUE EVITE A CONTAMINAÇÃO DAS MÃOS?" },
            { id: "dispenser_suportes_suficientes_sala_coleta_outro", texto: "• HÁ DISPENSER E SUPORTES EM QUANTIDADE SUFICIENTE, ABASTECIDOS E FUNCIONANDO?" },
            { id: "lixeira_pedal_tampa_identificada_sala_coleta_outro", texto: "• HÁ LIXEIRA PROVIDA DE PEDAL E TAMPA ADEQUADAMENTE IDENTIFICADA, CONFORME RDC Nº 222/2018?" },
            { id: "ralo_escamoteavel_sala_coleta_outro", texto: "• POSSUI RALO ESCAMOTEÁVEL?" },
            { id: "almotolias_frascos_identificados_sala_coleta_outro", texto: "• HÁ ALMOTOLIAS E FRASCOS IDENTIFICADOS COM DATA DE ABERTURA E VALIDADE?" },
            { id: "ventilacao_iluminacao_suficientes_sala_coleta_outro", texto: "• HÁ VENTILAÇÃO E ILUMINAÇÃO SUFICIENTES E ADEQUADAS?" },
            { id: "telas_milimetricas_janelas_sala_coleta_outro", texto: "• HÁ TELAS MILIMÉTRICAS EM TODAS AS JANELAS?" },
            { id: "mobiliario_bom_estado_sala_coleta_outro", texto: "• HÁ MOBILIÁRIO EM BOM ESTADO?" },
            { id: "longarinas_poltronas_macas_sala_coleta_outro", texto: "• HÁ LONGARINAS, POLTRONAS E MACAS COM ESTOFAMENTO LAVÁVEL E ÍNTEGRO?" },
            { id: "pisos_paredes_lavaveis_sala_coleta_outro", texto: "• HÁ PISOS E PAREDES COM REVESTIMENTOS QUE SEJAM LAVÁVEIS, OU SEJA, RESISTENTES A LIMPEZA COM ÁGUA E SABÃO?" },
            { id: "checagem_identificacao_paciente_sala_coleta_outro", texto: "• HÁ CHECAGEM NA IDENTIFICAÇÃO DO PACIENTE ANTES DO PROCEDIMENTO COM DUPLO PARÂMETRO?" },
            { id: "caixas_perfurocortante_sala_coleta_outro", texto: "• HÁ CAIXAS DE PERFUROCORTANTE E SUPORTE ADEQUADAS E ATÉ LIMITE ESTABELECIDO?" },
            { id: "armazenamento_insumos_adequado_sala_coleta_outro", texto: "• HÁ ARMAZENAMENTO ADEQUADO DE INSUMOS?" },
            { id: "controle_insumos_validade_sala_coleta_outro", texto: "• OS INSUMOS SÃO CONTROLADOS ADEQUADAMENTE COM CONFERÊNCIA DE QUANTIDADE E VALIDADE, COM DADOS DE RASTREABILIDADE ADEQUADOS?" },
            { id: "instrumentais_esterilizados_condicoes_sala_coleta_outro", texto: "• OS INSTRUMENTAIS ESTERELIZADOS SÃO ACONDICIONADOS EM CONDIÇÕES ADEQUADAS, COM DADOS DE RASTREABILIDADE ADEQUADOS?" },
            { id: "documentos_pops_atualizados_sala_coleta_outro", texto: "• HÁ DOCUMENTOS E POPS ATUALIZADOS DISPONÍVEIS AOS FUNCIONÁRIOS DO SETOR?" },
            { id: "equipe_enfermagem_epi_sala_coleta_outro", texto: "• A EQUIPE DE ENFERMAGEM UTILIZA EPI ADEQUADO?" },
            { id: "maca_diva_papel_lencol_sala_coleta_outro", texto: "• HÁ MACA OU DIVÃ COM PAPEL LENÇOL?" },
            { id: "equipamentos_condicoes_adequadas_sala_coleta_outro", texto: "• HÁ EQUIPAMENTOS EM CONDIÇÕES ADEQUADAS?" },
            { id: "equipamentos_calibracao_registro_sala_coleta_outro", texto: "• EQUIPAMENTOS SÃO CONFERIDOS PERIODICAMENTE E POSSUEM REGISTROS DE CALIBRAGEM?" },
            { id: "mapa_risco_setor_sala_coleta_outro", texto: "• HÁ MAPA DE RISCO DO SETOR?" },
            { id: "plano_contingencia_setor_sala_coleta_outro", texto: "• HÁ PLANO DE CONTINGÊNCIA DO SETOR?" },
            { id: "sala_exclusiva_coleta_rdc50_sala_coleta_outro", texto: "• HÁ SALA ESPECÍFICA E EXCLUSIVA NO HORÁRIO DE COLETA E DE ACORDO A RDC 50/02?" },
            { id: "acesso_caderno_coleta_sala_coleta_outro", texto: "• UNIDADE TEM ACESSO AO CADERNO DE COLETA E DEMAIS DOCUMENTOS ORIENTATIVOS?" },
            { id: "refrigerador_amostras_biologicas_sala_coleta_outro", texto: "• HÁ REFRIGERADOR PARA ACONDICIONAMENTO DE AMOSTRAS BIOLÓGICAS COM TERMÔMETRO CALIBRADO E PLANILHA PARA MONITORAMENTO DA TEMPERATURA?" },
            { id: "controle_temperatura_caixas_transporte_sala_coleta_outro", texto: "• UNIDADE FAZ CONFERÊNCIA DA TEMPERATURA DAS CAIXAS DE TRANSPORTE DE AMOSTRAS BIOLÓGICAS, COM TERMÔMETRO CALIBRADO E APROPRIADO?" },
            { id: "identificacao_destino_amostras_sala_coleta_outro", texto: "• AS AMOSTRAS SÃO IDENTIFICADAS CORRETAMENTE E DESTINADAS NOS FLYERS CORRESPONDENTES, CONFORME LABORATÓRIO EXECUTOR?" },
            { id: "registro_remessa_materiais_sala_coleta_outro", texto: "• FAZ-SE REGISTRO DIÁRIO/CONTROLE DE REMESSA, DOS MATERIAIS COLETADOS?" },
            { id: "acompanhamento_recoletas_sala_coleta_outro", texto: "• UNIDADE FAZ ACOMPANHAMENTO DIÁRIO DAS AMOSTRAS QUE NECESSITAM DE RECOLETA OU DE OUTRA TRATATIVA?" },
            { id: "documentacao_nao_conformidades_sala_coleta_outro", texto: "• MOTIVOS DE RECOLETAS E OUTRAS NÃO CONFORMIDADES SÃO DOCUMENTADOS E DISCUTIDOS EM EQUIPE?" }
            ]
    },
    {
        secaoId: "checklist-seção10",
        categoria: "10.3 Vacinação",
        itens: [
            { id: "ambiente_limpo_organizado_procedimento_vacina_outros", texto: "• HÁ AMBIENTE LIMPO E ORGANIZADO COM REGISTRO DE LIMPEZA ATUALIZADO?" },
            { id: "pia_torneira_acionamento_pedal_procedimento_vacina_outros", texto: "• HÁ PIA COM TORNEIRA, PREFERENCIALMENTE COM ACIONAMENTO POR PEDAL OU OUTRO MECANISMO QUE EVITE A CONTAMINAÇÃO DAS MÃOS?" },
            { id: "dispenser_suportes_suficientes_procedimento_vacina_outros", texto: "• HÁ DISPENSER E SUPORTES EM QUANTIDADE SUFICIENTE, ABASTECIDOS E FUNCIONANDO?" },
            { id: "lixeira_pedal_tampa_identificada_procedimento_vacina_outros", texto: "• HÁ LIXEIRA PROVIDA DE PEDAL E TAMPA ADEQUADAMENTE IDENTIFICADA, CONFORME RDC Nº 222/2018?" },
            { id: "ralo_escamoteavel_procedimento_vacina_outros", texto: "• POSSUI RALO ESCAMOTEÁVEL?" },
            { id: "almotolias_frascos_identificados_procedimento_vacina_outros", texto: "• HÁ ALMOTOLIAS E FRASCOS IDENTIFICADOS COM DATA DE ABERTURA E VALIDADE?" },
            { id: "ventilacao_iluminacao_suficientes_procedimento_vacina_outros", texto: "• HÁ VENTILAÇÃO E ILUMINAÇÃO SUFICIENTES E ADEQUADAS?" },
            { id: "telas_milimetricas_janelas_procedimento_vacina_outros", texto: "• HÁ TELAS MILIMÉTRICAS EM TODAS AS JANELAS?" },
            { id: "mobiliario_bom_estado_procedimento_vacina_outros", texto: "• HÁ MOBILIÁRIO EM BOM ESTADO?" },
            { id: "longarinas_poltronas_macas_procedimento_vacina_outros", texto: "• HÁ LONGARINAS, POLTRONAS E MACAS COM ESTOFAMENTO LAVÁVEL E ÍNTEGRO?" },
            { id: "pisos_paredes_lavaveis_procedimento_vacina_outros", texto: "• HÁ PISOS E PAREDES COM REVESTIMENTOS QUE SEJAM LAVÁVEIS, OU SEJA, RESISTENTES A LIMPEZA COM ÁGUA E SABÃO?" },
            { id: "checagem_identificacao_paciente_procedimento_vacina_outros", texto: "• HÁ CHECAGEM NA IDENTIFICAÇÃO DO PACIENTE ANTES DO PROCEDIMENTO COM DUPLO PARÂMETRO?" },
            { id: "notificacao_eapv_pmi_procedimento_vacina_outros", texto: "• NOTIFICA A OCORRÊNCIA DE EVENTOS ADVERSOS PÓS-VACINAÇÃO(EAPV), CONFORME DETERMINAÇÕES DO PMI?" },
            { id: "registro_eventos_adversos_prontuario_procedimento_vacina_outros", texto: "• OS EVENTOS ADVERSOS PÓS-VACINAÇÃO SÃO REGISTRADOS EM PRONTUÁRIO?" },
            { id: "caixas_perfurocortante_procedimento_vacina_outros", texto: "• HÁ CAIXAS DE PERFUROCORTANTE E SUPORTE ADEQUADAS E ATÉ LIMITE ESTABELECIDO?" },
            { id: "armazenamento_insumos_adequado_procedimento_vacina_outros", texto: "• HÁ ARMAZENAMENTO ADEQUADO DE INSUMOS?" },
            { id: "controle_insumos_validade_procedimento_vacina_outros", texto: "• OS INSUMOS SÃO CONTROLADOS ADEQUADAMENTE COM CONFERÊNCIA DE QUANTIDADE E VALIDADE, COM DADOS DE RASTREABILIDADE ADEQUADOS?" },
            { id: "instrumentais_esterilizados_condicoes_procedimento_vacina_outros", texto: "• OS INSTRUMENTAIS ESTERELIZADOS SÃO ACONDICIONADOS EM CONDIÇÕES ADEQUADAS, COM DADOS DE RASTREABILIDADE ADEQUADOS?" },
            { id: "documentos_pops_atualizados_procedimento_vacina_outros", texto: "• HÁ DOCUMENTOS E POPS ATUALIZADOS DISPONÍVEIS AOS FUNCIONÁRIOS DO SETOR?" },
            { id: "equipe_enfermagem_epi_procedimento_vacina_outros", texto: "• A EQUIPE DE ENFERMAGEM UTILIZA EPI ADEQUADO?" },
            { id: "maca_diva_papel_lencol_procedimento_vacina_outros", texto: "• HÁ MACA OU DIVÃ COM PAPEL LENÇOL?" },
            { id: "equipamentos_condicoes_adequadas_procedimento_vacina_outros", texto: "• HÁ EQUIPAMENTOS EM CONDIÇÕES ADEQUADAS?" },
            { id: "equipamentos_calibracao_registro_procedimento_vacina_outros", texto: "• EQUIPAMENTOS SÃO CONFERIDOS PERIODICAMENTE E POSSUEM REGISTROS DE CALIBRAGEM?" },
            { id: "mapa_risco_setor_procedimento_vacina_outros", texto: "• HÁ MAPA DE RISCO DO SETOR?" },
            { id: "plano_contingencia_setor_procedimento_vacina_outros", texto: "• HÁ PLANO DE CONTINGÊNCIA DO SETOR?" },
            { id: "informacao_imunobiologicos_procedimento_vacina_outros", texto: "• OS PROFISSIONAIS INFORMAM/MOSTRAM AO PACIENTE/RESPONSÁVEL A VALIDADE E NOME DOS IMUNOBIOLÓGICOS?" },
            { id: "ar_condicionado_funcionando_procedimento_vacina_outros", texto: "• HÁ NA SALA AR CONDICIONADO FUNCIONANDO?" },
            { id: "registro_temperatura_camara_vacina_procedimento_vacina_outros", texto: "• HÁ REGISTRO DE TEMPERATURA DA CÂMARA DE VACINA COM CONTROLE INTERNO E EXTERNO COM A PERIODICIDADE CORRETA?" },
            { id: "registro_temperatura_recebimento_procedimento_vacina_outros", texto: "• HÁ REGISTRO DE CONTROLE DE TEMPERATURA NO RECEBIMENTO DA VACINA?" },
            { id: "registro_siga_vacina_procedimento_vacina_outros", texto: "• HÁ REGISTRO DE VACINA NO SIGA VACINA (VACIVIDA E PLANILHAS DE CAMPANHA) EM TEMPO REAL?" },
            { id: "ficha_espelho_identificacao_procedimento_vacina_outros", texto: "• HÁ FICHA ESPELHO COM IDENTIFICAÇÃO COM DUPLO PARÂMETRO E ARQUIVADA CORRETAMENTE?" },
            { id: "armazenamento_imunobiologicos_procedimento_vacina_outros", texto: "• HÁ ARMAZENAMENTO E IDENTIFICAÇÃO CORRETAS DOS FRASCOS DOS IMUNOBIOLÓGICOS E DILUENTES?" },
            { id: "busca_faltosos_mensal_procedimento_vacina_outros", texto: "• REALIZA MENSALMENTE A BUSCA DE FALTOSOS, TANTO PARA ADULTOS COMO PARA CRIANÇAS, UTILIZANDO FICHÁRIO ROTATIVO OU RELATÓRIO DE SISTEMA DE INFORMAÇÃO?" },
            { id: "atualizacao_siga_vacina_procedimento_vacina_outros", texto: "• HÁ ATUALIZAÇÃO DO SIGA VACINA, CONFORME CARTÃO/CADENETA DE VACINA DO USUÁRIO?" },
            { id: "vacina_cartao_usuario_procedimento_vacina_outros", texto: "• A VACINA É ANOTADA NO CARTÃO DO USUÁRIO CORRETAMENTE?" },
            { id: "ofertas_vacinas_atraso_procedimento_vacina_outros", texto: "• HÁ OFERTAS DE VACINAS EM ATRASO?" },
            { id: "calendario_vacinacao_visivel_procedimento_vacina_outros", texto: "• HÁ, AFIXADO EM LOCAL VISÍVEL AO USUÁRIO, O CALENDÁRIO NACIONAL DE VACINAÇÃO DO SUS, COM A INDICAÇÃO DAS VACINAS?" },
            { id: "rastreabilidade_lotes_procedimento_vacina_outros", texto: "• MANTÉM AS NOTAS FISCAIS DAS VACINAS, POSSIBILITANDO A RASTREABILIDADE DOS LOTES?" },
            { id: "registro_doses_aplicadas_procedimento_vacina_outros", texto: "• SÃO MANTIDOS NO ESTABELECIMENTO PARA FINS DE FISCALIZAÇÃO OS REGISTROS DAS DOSES APLICADAS?" },
            { id: "controle_estoque_vacinas_procedimento_vacina_outros", texto: "• O PEDIDO (CONTROLE DE ESTOQUE) É REALIZADO CONFORME O CONSUMO PARA QUE NÃO OCORRAM FALTAS DE VACINAS?" }
        ]
    },
    {
        secaoId: "checklist-seção10",
        categoria: "10.4 Curativos",
        itens: [
            { id: "ambiente_limpo_organizado_procedimento_curativo_outros", texto: "• HÁ AMBIENTE LIMPO E ORGANIZADO COM REGISTRO DE LIMPEZA ATUALIZADO?" },
            { id: "pia_torneira_acionamento_pedal_procedimento_curativo_outros", texto: "• HÁ PIA COM TORNEIRA, PREFERENCIALMENTE COM ACIONAMENTO POR PEDAL OU OUTRO MECANISMO QUE EVITE A CONTAMINAÇÃO DAS MÃOS?" },
            { id: "dispenser_suportes_suficientes_procedimento_curativo_outros", texto: "• HÁ DISPENSER E SUPORTES EM QUANTIDADE SUFICIENTE, ABASTECIDOS E FUNCIONANDO?" },
            { id: "lixeira_pedal_tampa_identificada_procedimento_curativo_outros", texto: "• HÁ LIXEIRA PROVIDA DE PEDAL E TAMPA ADEQUADAMENTE IDENTIFICADA, CONFORME RDC Nº 222/2018?" },
            { id: "ralo_escamoteavel_procedimento_curativo_outros", texto: "• POSSUI RALO ESCAMOTEÁVEL?" },
            { id: "almotolias_frascos_identificados_procedimento_curativo_outros", texto: "• HÁ ALMOTOLIAS E FRASCOS IDENTIFICADOS COM DATA DE ABERTURA E VALIDADE?" },
            { id: "ventilacao_iluminacao_suficientes_procedimento_curativo_outros", texto: "• HÁ VENTILAÇÃO E ILUMINAÇÃO SUFICIENTES E ADEQUADAS?" },
            { id: "telas_milimetricas_janelas_procedimento_curativo_outros", texto: "• HÁ TELAS MILIMÉTRICAS EM TODAS AS JANELAS?" },
            { id: "mobiliario_bom_estado_procedimento_curativo_outros", texto: "• HÁ MOBILIÁRIO EM BOM ESTADO?" },
            { id: "longarinas_poltronas_macas_procedimento_curativo_outros", texto: "• HÁ LONGARINAS, POLTRONAS E MACAS COM ESTOFAMENTO LAVÁVEL E ÍNTEGRO?" },
            { id: "pisos_paredes_lavaveis_procedimento_curativo_outros", texto: "• HÁ PISOS E PAREDES COM REVESTIMENTOS QUE SEJAM LAVÁVEIS, OU SEJA, RESISTENTES A LIMPEZA COM ÁGUA E SABÃO?" },
            { id: "checagem_identificacao_paciente_procedimento_curativo_outros", texto: "• HÁ CHECAGEM NA IDENTIFICAÇÃO DO PACIENTE ANTES DO PROCEDIMENTO COM DUPLO PARÂMETRO?" },
            { id: "registro_procedimentos_prontuario_procedimento_curativo_outros", texto: "• HÁ REGISTRO DOS PROCEDIMENTOS EM PRONTUÁRIO NO MOMENTO DA REALIZAÇÃO, GARANTINDO A RASTREABILIDADE ADEQUADA?" },
            { id: "caixas_perfurocortante_procedimento_curativo_outros", texto: "• HÁ CAIXAS DE PERFUROCORTANTE E SUPORTE ADEQUADAS E ATÉ LIMITE ESTABELECIDO?" },
            { id: "armazenamento_insumos_adequado_procedimento_curativo_outros", texto: "• HÁ ARMAZENAMENTO ADEQUADO DE INSUMOS?" },
            { id: "controle_insumos_validade_procedimento_curativo_outros", texto: "• OS INSUMOS SÃO CONTROLADOS ADEQUADAMENTE COM CONFERÊNCIA DE QUANTIDADE E VALIDADE, COM DADOS DE RASTREABILIDADE ADEQUADOS?" },
            { id: "instrumentais_esterilizados_condicoes_procedimento_curativo_outros", texto: "• OS INSTRUMENTAIS ESTERELIZADOS SÃO ACONDICIONADOS EM CONDIÇÕES ADEQUADAS, COM DADOS DE RASTREABILIDADE ADEQUADOS?" },
            { id: "documentos_pops_atualizados_procedimento_curativo_outros", texto: "• HÁ DOCUMENTOS E POPS ATUALIZADOS DISPONÍVEIS AOS FUNCIONÁRIOS DO SETOR?" },
            { id: "equipe_enfermagem_epi_procedimento_curativo_outros", texto: "• A EQUIPE DE ENFERMAGEM UTILIZA EPI ADEQUADO?" },
            { id: "maca_diva_papel_lencol_procedimento_curativo_outros", texto: "• HÁ MACA OU DIVÃ COM PAPEL LENÇOL?" },
            { id: "equipamentos_condicoes_adequadas_procedimento_curativo_outros", texto: "• HÁ EQUIPAMENTOS EM CONDIÇÕES ADEQUADAS?" },
            { id: "equipamentos_calibracao_registro_procedimento_curativo_outros", texto: "• EQUIPAMENTOS SÃO CONFERIDOS PERIODICAMENTE E POSSUEM REGISTROS DE CALIBRAGEM?" },
            { id: "mapa_risco_setor_procedimento_curativo_outros", texto: "• HÁ MAPA DE RISCO DO SETOR?" },
            { id: "plano_contingencia_setor_procedimento_curativo_outros", texto: "• HÁ PLANO DE CONTINGÊNCIA DO SETOR?" },
            { id: "lavatorio_adequado_procedimento_curativo_outros", texto: "• LAVATÓRIO ADEQUADO?" },
            { id: "ducha_aquecida_procedimento_curativo_outros", texto: "• HÁ DUCHA AQUECIDA?" },
            { id: "baixa_insumos_gss_siga_procedimento_curativo_outros", texto: "• A BAIXA DE INSUMOS É REALIZADA NO GSS E SIGA FERIDAS?" },
            { id: "registro_atendimento_siga_feridas_procedimento_curativo_outros", texto: "• É REALIZADO REGISTRO DE ATENDIMENTO NO SIGA FERIDAS?" },
            { id: "busca_ativa_faltosos_procedimento_curativo_outros", texto: "• REALIZA E DOCUMENTA A BUSCA ATIVA DOS FALTOSOS?" }
        ]
    },
    {
        secaoId: "checklist-seção10",
        categoria: "10.5 Esterilização/Espurgo",
        itens: [
            { id: "ambiente_limpo_organizado_procedimento_esterelizacao_outros", texto: "• HÁ AMBIENTE LIMPO E ORGANIZADO COM REGISTRO DE LIMPEZA ATUALIZADO?" },
            { id: "pia_torneira_acionamento_pedal_procedimento_esterelizacao_outros", texto: "• HÁ PIA COM TORNEIRA, PREFERENCIALMENTE COM ACIONAMENTO POR PEDAL OU OUTRO MECANISMO QUE EVITE A CONTAMINAÇÃO DAS MÃOS?" },
            { id: "dispenser_suportes_suficientes_procedimento_esterelizacao_outros", texto: "• HÁ DISPENSER E SUPORTES EM QUANTIDADE SUFICIENTE, ABASTECIDOS E FUNCIONANDO?" },
            { id: "lixeira_pedal_tampa_identificada_procedimento_esterelizacao_outros", texto: "• HÁ LIXEIRA PROVIDA DE PEDAL E TAMPA ADEQUADAMENTE IDENTIFICADA, CONFORME RDC Nº 222/2018?" },
            { id: "almotolias_frascos_identificados_procedimento_esterelizacao_outros", texto: "• HÁ ALMOTOLIAS E FRASCOS IDENTIFICADOS COM DATA DE ABERTURA E VALIDADE?" },
            { id: "ventilacao_iluminacao_suficientes_procedimento_esterelizacao_outros", texto: "• HÁ VENTILAÇÃO E ILUMINAÇÃO SUFICIENTES E ADEQUADAS?" },
            { id: "telas_milimetricas_janelas_procedimento_esterelizacao_outros", texto: "• HÁ TELAS MILIMÉTRICAS EM TODAS AS JANELAS?" },
            { id: "ralo_escamoteavel_procedimento_esterelizacao_outros", texto: "• POSSUI RALO ESCAMOTEÁVEL?" },
            { id: "mobiliario_bom_estado_procedimento_esterelizacao_outros", texto: "• HÁ MOBILIÁRIO EM BOM ESTADO?" },
            { id: "pisos_paredes_lavaveis_procedimento_esterelizacao_outros", texto: "• HÁ PISOS E PAREDES COM REVESTIMENTOS QUE SEJAM LAVÁVEIS, OU SEJA, RESISTENTES A LIMPEZA COM ÁGUA E SABÃO?" },
            { id: "caixas_perfurocortante_procedimento_esterelizacao_outros", texto: "• HÁ CAIXAS DE PERFUROCORTANTE E SUPORTE ADEQUADAS E ATÉ LIMITE ESTABELECIDO?" },
            { id: "armazenamento_insumos_adequado_procedimento_esterelizacao_outros", texto: "• HÁ ARMAZENAMENTO ADEQUADO DE INSUMOS?" },
            { id: "controle_insumos_validade_procedimento_esterelizacao_outros", texto: "• OS INSUMOS SÃO CONTROLADOS ADEQUADAMENTE COM CONFERÊNCIA DE QUANTIDADE E VALIDADE, COM DADOS DE RASTREABILIDADE ADEQUADOS?" },
            { id: "instrumentais_esterilizados_condicoes_procedimento_esterelizacao_outros", texto: "• OS INSTRUMENTAIS ESTERELIZADOS SÃO ACONDICIONADOS EM CONDIÇÕES ADEQUADAS, COM DADOS DE RASTREABILIDADE ADEQUADOS?" },
            { id: "documentos_pops_atualizados_procedimento_esterelizacao_outros", texto: "• HÁ DOCUMENTOS E POPS ATUALIZADOS DISPONÍVEIS AOS FUNCIONÁRIOS DO SETOR?" },
            { id: "equipe_enfermagem_epi_procedimento_esterelizacao_outros", texto: "• A EQUIPE DE ENFERMAGEM UTILIZA EPI ADEQUADO?" },
            { id: "equipamentos_condicoes_adequadas_procedimento_esterelizacao_outros", texto: "• HÁ EQUIPAMENTOS EM CONDIÇÕES ADEQUADAS?" },
            { id: "equipamentos_calibracao_registro_procedimento_esterelizacao_outros", texto: "• EQUIPAMENTOS SÃO CONFERIDOS PERIODICAMENTE E POSSUEM REGISTROS DE CALIBRAGEM?" },
            { id: "mapa_risco_setor_procedimento_esterelizacao_outros", texto: "• HÁ MAPA DE RISCO DO SETOR?" },
            { id: "plano_contingencia_setor_procedimento_esterelizacao_outros", texto: "• HÁ PLANO DE CONTINGÊNCIA DO SETOR?" },
            { id: "autoclave_capacidade_suficiente_procedimento_esterelizacao_outros", texto: "• HÁ AUTOCLAVE COM CAPACIDADE SUFICIENTE PARA ATENDER A DEMANDA DA UNIDADE?" },
            { id: "incubadora_controle_biologico_procedimento_esterelizacao_outros", texto: "• HÁ INCUBADORA PARA CONTROLE DE RISCO BILOGICO ADEQUADA À QUANTIDADE DE MATERIAIS UTILIZADOS (INDICADOR BIOLÓGICO), COM CALIBRAÇÃO ANUAL?" },
            { id: "seladora_disponivel_procedimento_esterelizacao_outros", texto: "• HÁ SELADORA DISPONÍVEL E FUNCIONANDO?" },
            { id: "caderno_controle_esterilizacao_procedimento_esterelizacao_outros", texto: "• HÁ CADERNO DE CONTROLE DIÁRIO DE ESTERILIZAÇÃO DEVIDAMENTE ATUALIZADO?" },
            { id: "fluxo_material_sujo_limpo_procedimento_esterelizacao_outros", texto: "• FAZ-SE FLUXO CORRETO DE MATERIAL SUJO E LIMPO?" },
            { id: "caixa_transporte_identificada_procedimento_esterelizacao_outros", texto: "• A CAIXA DE TRANSPORTE DE MATERIAL LIMPO E SUJO É IDENTIFICADA ADEQUADAMENTE?" },
            { id: "salas_expurgo_esterilizacao_procedimento_esterelizacao_outros", texto: "• HÁ SALAS ESPECÍFICAS DE EXPURGO E ESTERELIZAÇÃO, COM PASS THROUGH (JANELA DE PASSAGEM COM FECHAMENTO)?" },
            { id: "identificacao_pacotes_instrumentais_procedimento_esterelizacao_outros", texto: "• HÁ IDENTIFICAÇÃO DOS PACOTES DE INSTRUMENTAIS, ESTERELIZADOS, COM DATA E RESPONSÁVEL, BEM COMO DE VALIDADE?" },
            { id: "liberacao_material_biologico_procedimento_esterelizacao_outros", texto: "• REALIZA A LIBERAÇÃO DO MATERIAL ESTERELIZADO APENAS APÓS O TÉRMINO DO TESTE BIOLÓGICO?" },
            { id: "testagem_acido_peracetico_procedimento_esterelizacao_outros", texto: "• REALIZA TESTAGEM E REGISTRO DO ÁCIDO PERACÉTICO, CONFORME PRECONIZADO?" },
            { id: "detergente_enzimatico_disponivel_procedimento_esterelizacao_outros", texto: "• POSSUI DETERGENTE ENZIMÁTICO DISPONÍVEL, COM REGISTRO DE DILUIÇÃO E VALIDADE?" },
            { id: "limpeza_autoclave_registro_procedimento_esterelizacao_outros", texto: "• FAZ-SE LIMPEZA SISTEMÁTICA DA AUTOCLAVE, COM REGISTRO?" }
        ]
    },
    {
        secaoId: "checklist-seção10",
        categoria: "10.6 Maleta/Carrinho de Emergência",
        itens: [
            {id: "material_emergencia_acessivel_maleta_carrinho", texto: "• O MATERIAL DE EMERGÊNCIA ESTÁ ACESSÍVEL?"},
            {id: "profissionais_capacitados_material_emergencia_maleta_carrinho", texto: "• HÁ PROFISSIONAIS CAPACITADOS PARA O USO DO MATERIAL DE EMERGÊNCIA, DURANTE TODO O FUNCIONAMENTO DA UNIDADE?"},
            {id: "checagem_caixa_emergencia_maleta_carrinho", texto: "• É REALIZADA A CHECAGEM DA CAIXA/CARINHO DE EMERGÊNCIA (MEDICAMENTOS, INSUMOS E EQUIPAMENTOS), DOCUMENTADA E CONFORME RESPECTIVA LEGISLAÇÃO?"},
            {id: "verificacao_diaria_dea_maleta_carrinho", texto:"• HÁ VERIFICAÇÃO DIÁRIA DE FUNCIONAMENTO DO DEA, COM REGISTRO?" },
            {id: "calibracao_dea_maleta_carrinho",texto: "• HÁ CALIBRAÇÃO DO DEA?"},
            {id: "pas_dea_validade_maleta_carrinho", texto: "• AS PAS DO DEA ESTÃO NA VALIDADE?"}
        ]
    },
    {
    secaoId: "checklist-seção11",
    categoria: "11 Regulação",
    itens: [
        {id: "validacao_requalificacao_fila_espera_regulação11", texto: "• HÁ VALIDAÇÃO E REQUALIFICAÇÃO DA FILA DE ESPERA PERIODICAMENTE?"},
        {id: "busca_vagas_presenca_usuario_regulação11", texto: "• HÁ BUSCA DE VAGAS NA PRESENÇA DO USUÁRIO?" },
        {id: "insercao_pedidos_filas_siga_regulação11", texto: "• INSERE TODOS OS PEDIDOS NAS FILAS NO SIGA OU AVALIAÇÃO DO REGULADOR, CONFORME PROTOCOLO?"},
        {id: "equipe_tecnica_horario_regulação11", texto: "• HÁ EQUIPE TÉCNICA COM HORÁRIO DEDICADO PARA ACOMPANHAMENTO DOS PROCESSOS REGULATÓRIOS?"},
        {id: "protocolo_regulacao_acesso_regulação11", texto: "• HÁ PROTOCOLO DISPONÍVEL DE REGULAÇÃO DE ACESSO?"},
        {id: "rotina_atualizacao_dados_regulação11", texto: "• HÁ ROTINA DE ATUALIZAÇÃO DE DADOS CADASTRAIS DO USUÁRIO?"},
        {id: "gestao_fila_espera_multiprofissional_regulação11", texto: "• HÁ GESTÃO DA FILA DE ESPERA PARA A EQUIPE MULTIPROFISSIONAL?"}
    ]
},
{
    secaoId: "checklist-seção12",
    categoria: "12.1 Constituição de Comissões/Comitês/Nucleos",
    itens: [
        {id: "ubs_possui_nucleo_prevencao_violencia_comite_nucleo", texto: "• A UBS POSSUI NÚCLEO DE PREVENÇÃO DE VIOLÊNCIA – NPV?"},
        {id: "ubs_possui_grupo_controle_dengue_decreto_comite_nucleo", texto: "• A UBS POSSUI GRUPO INTERNO DE CONTROLE DA DENGUE – DECRETO 56.669?"},
        {id: "grupo_vistorias_roteiro_aedes_comite_nucleo", texto: "• O GRUPO FAZ A VISTORIAS PREVISTAS NO 'ROTEIRO PARA CONTROLE DO AEDES EM EDIFICAÇÕES PÚBLICAS'?"},
        {id: "ubs_possui_nucleo_seguranca_paciente_comite_nucleo", texto: "• A UBS POSSUI NÚCLEO DE SEGURANÇA DO PACIENTE?"},
        {id: "ubs_possui_comissao_prontuario_comite_nucleo", texto: "• A UBS POSSUI COMISSÃO DE PRONTUÁRIO?"},
        {id: "ubs_possui_nuvis_ab_comite_nucleo", texto: "• A UBS POSSUI NÚCLEO DE VIGILÂNCIA EM SAÚDE - NUVIS-AB?"},
        {id: "reuniao_mensal_nuvis_ab_comite_nucleo", texto: "• ESTÁ INSTITUÍDA A REUNIÃO MENSAL ENTRE OS INTEGRANTES DO NUVIS-AB?"},
        {id: "ubs_participa_comite_mortalidade_materno_infantil_comite_nucleo", texto: "• A UBS PARTICIPA DAS DISCUSSÕES DO COMITÊ DE MORTALIDADE MATERNO-INFANTIL?"},
        {id: "ubs_participa_comite_sifilis_vertical_comite_nucleo", texto: "• A UBS PARTICIPA DAS DISCUSSÕES DO COMITÊ DE TRANSMISSÃO VERTICAL DA SÍFILIS?"},
        {id: "ubs_participa_comite_acumulacao_comite_nucleo", texto: "• A UBS PARTICIPA DAS DISCUSSÕES DO COMITÊ INTERSECRETARIAL DE ATENÇÃO INTEGRAL ÀS PESSOAS EM SITUAÇÃO DE ACUMULAÇÃO?"}
    ]
},
{
    secaoId: "checklist-seção12",
    categoria: "12.2 Reuniões e Educação Permanente",
    itens: [
        {id: "cronograma_registro_reunioes_equipe_educacao_permanente", texto: "• HÁ CRONOGRAMA E REGISTRO DE REUNIÕES DE EQUIPE, TÉCNICAS E GERAIS?"},
        {id: "planejamento_educacao_permanente_educacao_permanente", texto: "• HÁ PLANEJAMENTO INTERNO DE EDUCAÇÃO PERMANENTE?"},
        {id: "reunioes_conselho_gestor_educacao_permanente", texto: "• HÁ CRONOGRAMA E REGISTRO DE REUNIÕES DO CONSELHO GESTOR, ACESSÍVEL E DE CONHECIMENTO DAS EQUIPES?"},
        {id: "reunioes_comissao_prontuario_educacao_permanente", texto: "• HÁ CRONOGRAMA E REGISTRO DE REUNIÕES DA COMISSÃO DE PRONTUÁRIO, ACESSÍVEL E DE CONHECIMENTO DAS EQUIPES?"},
        {id: "reunioes_matriciamento_saude_mental_educacao_permanente", texto: "• HÁ CRONOGRAMA E REGISTRO DE REUNIÕES DE MATRICIAMENTO EM SAÚDE MENTAL, ACESSÍVEL E DE CONHECIMENTO DAS EQUIPES?"},
        {id: "reunioes_nuvis_educacao_permanente", texto: "• HÁ CRONOGRAMA E REGISTRO DE REUNIÕES DO NÚCLEO DE VIGILÂNCIA - NUVIS ACESSIVEL E DE CONHECIMENTO DAS EQUIPES?"},
        {id: "reunioes_nucleo_qualidade_seguranca_educacao_permanente", texto: "• HÁ CRONOGRAMA E REGISTRO DE REUNIÕES DO NÚCLEO DE QUALIDADE E SEGURANÇA, ACESSÍVEL E DE CONHECIMENTO DAS EQUIPES?"},
        {id: "reunioes_comite_morte_materno_infantil_educacao_permanente", texto: "• HÁ CRONOGRAMA E REGISTRO DE REUNIÕES DO COMITÊ MORTE MATERNO-INFANTIL, ACESSÍVEL E DE CONHECIMENTO DAS EQUIPES?"},
        {id: "metas_seguranca_paciente_educacao_permanente", texto: "• HÁ DOCUMENTADA E DISSEMINADA AS METAS INTERNACIONAIS DE SEGURANÇA DO PACIENTE?"},
        {id: "abordagem_ouvidorias_reunioes_educacao_permanente", texto: "• HÁ ABORDAGEM DAS OUVIDORIAS EM REUNIÕES DE EQUIPE E CONSELHO GESTOR?"},
        {id: "unidade_conhece_plamep_sts_educacao_permanente", texto: "• A UNIDADE CONHECE O PLAMEP DA STS?"}
    ]
},
{
    secaoId: "checklist-seção13",
    categoria: "13.1 Doenças Crônicas não Transmissíveis",
    itens: [
        {id: "registro_busca_ativa_dcnt_doencas_cronicas", texto: "• HÁ REGISTROS (EVIDÊNCIAS) DA REALIZAÇÃO DE BUSCA ATIVA (INTERNA E/OU EXTERNA) MENSAL PARA PESSOAS COM DCNT CONFORME PROTOCOLO DE SMS?"},
        {id: "monitoramento_pressao_arterial_doencas_cronicas", texto: "• HÁ REGISTROS (EVIDÊNCIAS) DA REALIZAÇÃO DO MONITORAMENTO DE PRESSÃO ARTERIAL PARA ACOMPANHAMENTO MENSAL E CONTROLE DE HIPERTENSOS?"},
        {id: "registro_estratificacao_risco_hipertensao_doencas_cronicas", texto: "• HÁ REGISTRO INDIVIDUAL DO RESULTADO (CLASSIFICAÇÃO BAIXO, MÉDIO E ALTO) DO PROCEDIMENTO DE ESTRATIFICAÇÃO DE RISCO CARDIOVASCULAR PARA HIPERTENSOS (PESSOAS COM DIAGNÓSTICO MÉDICO)?"},
        {id: "relatorio_acoes_coletivas_autocuidado_doencas_cronicas", texto: "• HÁ RELATÓRIO(S) ATUALIZADO(S) SOBRE PLANEJAMENTO E EXECUÇÃO DE AÇÕES COLETIVAS E ABORDAGENS MULTIPROFISSIONAL/INTERDISCIPLINAR PARA MUDANÇA DE ESTILO DE VIDA (GRUPOS EDUCATIVOS/PLANO DE AUTOCUIDADO)?"}
    ]
},
{
    secaoId: "checklist-seção13",
    categoria: "13.2 Programa Melhor em Casa (Perguntas que a Ubs deve responder",
    itens: [
        {id: "evidencia_usuarios_emad_melhor_casa", texto: "• HÁ EVIDÊNCIA DA RELAÇÃO USUÁRIOS QUE A EMAD ACOMPANHA?"},
        {id: "evidencia_visitas_paciente_melhor_casa", texto: "• HÁ EVIDÊNCIA ESTRUTURADA DAS ÚLTIMAS VISITAS REALIZADAS PARA OS PACIENTES AD1?"}
    ]
},
{
    secaoId: "checklist-seção13",
    categoria: "13.3 Programa Cuidando de Pessoas com Doenças Raras",
    itens: [
        {id: "participacao_profissional_curso_doencas_raras", texto: "• HÁ PARTICIPAÇÃO DE PELO MENOS 1 PROFISSIONAL NO CURSO DE SENSIBILIZAÇÃO EM DOENÇAS RARAS?"}
    ]
},
{
    secaoId: "checklist-seção13",
    categoria: "13.4 Programa ODP",
    itens: [
        {id: "relatorio_monitoramento_cadastradas_programa_ODP", texto: "• HÁ REGISTROS INDIVIDUAIS (COMPLETOS) E RELATÓRIO(S) ATUALIZADO(S) SOBRE MONITORAMENTO DAS PESSOAS CADASTRADAS NO PROGRAMA DE ODP?"}
    ]
},
{
    secaoId: "checklist-seção13",
    categoria: "13.5 Saúde do Homem",
    itens: [
        {id: "registro_pre_natal_parceiro_testagem_saude_homem", texto: "• HÁ REGISTROS INDIVIDUAIS SOBRE CONSULTAS DE PRÉ-NATAL DO PARCEIRO ABORDANDO TESTAGEM, DIAGNÓSTICO E / OU ACONSELHAMENTO ( PATERNIDADE RESPONSÁVEL / SAÚDE SEXUAL E REPRODUTIVA)?"},
        {id: "açoes_populacao_masculina_saude_homem", texto: "• HÁ REGISTROS E/OU EVIDÊNCIAS DA REALIZAÇÃO DE AÇÕES VOLTADAS A POPULAÇÃO MASCULINA (ACOLHIMENTO/ACESSO, RASTREAMENTO E DETECÇÃO PRECOCE DE DOENÇAS GENITO-URINÁRIAS E CA MAIS FREQUENTES) PRECONIZADAS NA POLÍTICA MUNICIPAL DE ATENÇÃO INTEGRAL À SAÚDE DO HOMEM - PMAISH?"}
    ]
},
{
    secaoId: "checklist-seção13",
    categoria: "13.6 IDP",
    itens: [
        {id: "controle_consultas_laudos_IDP", texto: "• HÁ CONTROLE DE CONSULTAS PARA RENOVAÇÃO DOS LAUDOS? "},
        {id: "controle_visita_domiciliar_IDP", texto: "• HÁ CONTROLE DE VISITAS DOMICILIARES DOS ACAMADOS? "},
        {id: "projeto_unidade_cuidadores_IDP", texto: "• HÁ ALGUM PROJETO DA UNIDADE PARA CUIDADORES? "}
    ]
},
{
    secaoId: "checklist-seção13",
    categoria: "13.7 PAMG",
    itens: [
        {id: "acompanhemento_parcientes_inseridos_PAMG", texto: "• HÁ ACOMPANHAMENTO DOS PACIENTES INSERIDOS NO PAMG?"}
    ]
},
{
    secaoId: "checklist-seção13",
    categoria: "13.8 Saúde Mental",
    itens: [
        {id: "reuniao_matriciamento_caps_saude_mental", texto: "• HÁ REUNIÃO DE MATRICIAMENTO COM CAPS?"},
        {id: "espaco_discussao_equipes_multi_saude_mental", texto: "• HÁ ESPAÇO PERIÓDICO DE DISCUSSÃO ENTRE OS PROFISSIONAIS DAS EQUIPES MULTI?"},
        {id: "pts_prontuario_saude_mental", texto: "• HÁ PTS NO PRONTUÁRIO?"},
        {id: "articulacao_rede_intersetorial_propostas_saude_mental", texto: "• HÁ ARTICULAÇÃO DA REDE INTERSETORIAL PARA AMPLIAÇÃO DAS PROPOSTAS PSICOSSOCIAIS?"},
        {id: "protocolos_documentos_tecnicos_disponiveis_saude_mental", texto: "• HÁ PROTOCOLOS, NOTAS E DEMAIS DOCUMENTOS TÉCNICOS À DISPOSIÇÃO PARA CONSULTA DAS EQUIPES?"}
    ]
},
{
    secaoId: "checklist-seção13",
    categoria: "13.9 Promoção da Saúde",
    itens: [
        {id: "coleta_raca_cor_sistemas_promacao_saude", texto: "• COLETA E PREENCHE O QUESITO RAÇA/COR NOS SISTEMAS DE INFORMAÇÃO?"},
        {id: "busca_ativa_doenca_falciforme_promacao_saude", texto: "• FAZ-SE BUSCA ATIVA DAS CRIANÇAS DIAGNOSTICADAS COM DOENÇA FALCIFORME NA TRIAGEM NEONATAL?"},
        {id: "linha_cuidados_violencia_promacao_saude", texto: "• A LINHA DE CUIDADOS DA SAÚDE DA PESSOA EM SITUAÇÃO DE VIOLÊNCIA ESTÁ SENDO IMPLEMENTADA?"},
        {id: "projeto_pavs_promacao_saude", texto: "• HÁ PROJETO BASEADO NO DIAGNÓSTICO SOCIOAMBIENTAL - PAVS?"},
        {id: "acompanhamento_antropometrico_promacao_saude", texto: "• HÁ ACOMPANHAMENTO DO PESO E ALTURA DE CRIANÇAS E GESTANTES, BEM COMO PREENCHIMENTO DOS MARCADORES DE CONSUMO ALIMENTAR, COM SEU RESPECTIVO REGISTRO?"},
        {id: "grupos_educacao_nutricional_promacao_saude", texto: "• REALIZA GRUPOS DE EDUCAÇÃO ALIMENTAR E NUTRICIONAL?"},
        {id: "atividade_fisica_planos_terapeuticos_promacao_saude", texto: "• A ATIVIDADE FÍSICA COMPOÊ A MAIORIA DOS PLANOS TERAPÊUTICOS?"},
        {id: "utilizacao_ofertas_territorio_promacao_saude", texto: "• HÁ UTILIZAÇÃO DAS OFERTAS DO TERRITÓRIO NA COMPOSIÇÃO DOS PLANOS TERAPÊUTICOS?"},
        {id: "participacao_foruns_intersetoriais_promacao_saude", texto: "• OS PROFISSIONAIS PARTICIPAM DE FÓRUNS E REUNIÕES COM OUTRAS SECRETARIAS NO TERRITÓRIO?"}
    ]
},
{
    secaoId: "checklist-seção13",
    categoria: "13.10 Saúde da Mulher",
    itens: [
        {id: "teste_gravidez_oferta_testes_saude_mulher", texto: "• APÓS O TESTE DE GRAVIDEZ, MESMO QUE O RESULTADO SEJA NEGATIVO HÁ OFERTA DOS TESTES RÁPIDOS?"},
        {id: "participacao_foruns_maternidade_saude_mulher", texto: "• PARTICIPA DOS FÓRUNS DE MATERNIDADE DE SUA REFERÊNCIA?"},
        {id: "aprazamento_papanicolaou_mamografia_saude_mulher", texto: "• REALIZA APRAZAMENTO PARA REALIZAÇÃO DO PAPANICOLAOU E DE MAMOGRAFIA?"},
        {id: "busca_ativa_gestantes_faltosas_saude_mulher", texto: "• REALIZA BUSCA ATIVA DE GESTANTES FALTOSAS?"},
        {id: "monitora_fila_diu_consultas_saude_mulher", texto: "• MONITORA FILA DE ESPERA DE DIU, CONSULTAS PARA O GINECOLOGISTA, MASTOLOGISTA E PRÉ NATAL DE ALTO RISCO?"},
        {id: "controle_exames_alterados_saude_mulher", texto: "• HÁ EVIDÊNCIAS DE CONTROLE E MONITORAMENTO DE PAPANICOLAOU E MAMOGRAFIAS ALTERADOS?"},
        {id: "treinamento_coleta_papanicolaou_saude_mulher", texto: "• MONITORA TREINAMENTO DA EQUIPE PARA COLETA DE PAPANICOLAOU? (CURSO FOSP)"}
    ]
},
{
    secaoId: "checklist-seção13",
    categoria: "13.11 Saúde do Idoso",
    itens: [
        {id: "matriciamento_ursi_saude_idoso", texto: "• O MATRICIAMENTO COM A URSI DE REFERÊNCIA ESTÁ SENDO REALIZADO?"},
        {id: "discussao_casos_rede_intersetorial_saude_idoso", texto: "• HÁ DISCUSSÃO DE CASOS COM OUTROS SERVIÇOS DA REDE (CREAS, CAPS, CER, etc)?"},
        {id: "ampi_ab_idosos_cadastrados_saude_idoso", texto: "• A AMPI-AB É REALIZADA EM TODOS OS IDOSOS CADASTRADOS NA UNIDADE?"},
        {id: "busca_ativa_idosos_territorio_saude_idoso", texto: "• HÁ BUSCA ATIVA PELOS IDOSOS DO TERITÓRIO?"},
        {id: "atendimento_raspi_ampiab_saude_idoso", texto: "• O ATENDIMENTO AO IDOSO É REALIZADO DE ACORDO COM OS FLUXOS DA RASPI SEGUINDO AS DIRETRIZES E ENCAMINHAMENTOS PELA AMPI-AB?"}
    ]
},
{
    secaoId: "checklist-seção13",
    categoria: "13.12 Saúde da Criança",
    itens: [
        {id: "consulta_rn_puericultura_saude_crianca", texto: "• HÁ CONSULTA DISPONÍVEL PARA RN E SEGUIMENTO EM PUERICULTURA?"},
        {id: "monitoramento_rn_risco_ras_saude_crianca", texto: "• HÁ MONITORAMENTO DOS RN DE RISCO JUNTO AOS DEMAIS PONTOS DE ATENÇÃO DAS RAS?"},
        {id: "educacao_aleitamento_materno_saude_crianca", texto: "• HÁ ATIVIDADE EDUCATIVA PERMANENTE SOBRE O ALEITAMENTO MATERNO?"},
        {id: "acoes_pse_eixos_saude_crianca", texto: "• A UNIDADE DESENVOLVE AÇÕES DO PSE EM TODOS OS SEUS EIXOS?"}
    ]
},
{
    secaoId: "checklist-seção14",
    categoria: "14 Sistemas de Informação, LGPD, Outros",
    itens: [
        {id: "unidade_utiliza_email_institucional_LGPD", texto: "A UNIDADE UTILIZA APENAS O E-MAIL INSTITUCIONAL?"},
        {id: "controle_acesso_sitemas_LGPD", texto: "HÁ CONTROLE DE SOLICITAÇÃO E EXCLUSÃO DE ACESSO AOS SISTEMAS INFORMATIZADOS?"},
        {id: "unidade_dados_sensiveis_ferramentas_nao_oficiais" , texto: "A UNIDADE NÃO COMPARTILHA DADOS PESSOAIS E INFORMAÇÕES SENSÍVEIS POR FERRAMENTAS NÃO OFICIAIS COMO WHATSAPP, GOOGLE E OUTROS?"}
    ]
}

];


function gerarChecklist() {
    const secoesUnicas = new Set();

    // Passo 1: Criar botões para cada seção única
    perguntas.forEach(secao => {
        if (!secoesUnicas.has(secao.secaoId)) {
            secoesUnicas.add(secao.secaoId);
            const container = document.getElementById(secao.secaoId);
            
            if (container) {
                // Criar div wrapper para organizar a estrutura
                const wrapper = document.createElement("div");
                wrapper.className = "section-wrapper";

                // Botão Superior
                const topButton = document.createElement("button");
                topButton.className = "collapse-button top";
                topButton.textContent = "Mostrar Conteúdo ▼";
                topButton.onclick = () => toggleCollapse(secao.secaoId);

                // Botão Inferior
                const bottomButton = document.createElement("button");
                bottomButton.className = "collapse-button bottom";
                bottomButton.textContent = "Esconder Conteúdo ▲";
                bottomButton.style.display = "none";
                bottomButton.id = `botao-rodape-${secao.secaoId}`;
                bottomButton.onclick = () => toggleCollapse(secao.secaoId);

                // Reorganizar a estrutura
                container.parentNode.insertBefore(wrapper, container);
                wrapper.appendChild(topButton);
                wrapper.appendChild(container);
                wrapper.appendChild(bottomButton);
            }
        }
    });

    // Passo 2: Gerar perguntas (código original)
    perguntas.forEach(secao => {
        const container = document.getElementById(secao.secaoId);
        if (!container) return;

        const fieldset = document.createElement("fieldset");
        const legend = document.createElement("legend");
        legend.textContent = secao.categoria;
        fieldset.appendChild(legend);
        fieldset.appendChild(legend);

        secao.itens.forEach(pergunta => {
            const div = document.createElement("div");
            div.classList.add("pergunta");

            const label = document.createElement("label");
            label.setAttribute("for", pergunta.id);
            label.textContent = pergunta.texto;

            const select = document.createElement("select");
            select.classList.add("status");
            select.name = pergunta.id;
            select.id = pergunta.id;
            select.innerHTML = `
                <option value="atendido">Atendido</option>
                <option value="parcialmente_atendido">Parcialmente Atendido</option>
                <option value="nao_atendido">Não Atendido</option>
                <option value="nao_se_aplica">Não se Aplica</option>
            `;
        
            // ▼▼▼ ADICIONE ESTA LINHA ▼▼▼
            select.dataset.initialValue = "atendido"; // Registrar valor inicial

            const textarea = document.createElement("textarea");
            textarea.classList.add("justificativa");
            textarea.name = `justificativa_${pergunta.id}`;
            textarea.placeholder = "Justifique se necessário";

            div.appendChild(label);
            div.appendChild(select);
            div.appendChild(textarea);
            fieldset.appendChild(div);
        });

        container.appendChild(fieldset); // Adiciona o fieldset dentro do container da seção correta
    });
}
function toggleCollapse(sectionId) {
    const content = document.getElementById(sectionId);
    const bottomButton = document.getElementById(`botao-rodape-${sectionId}`);
    const topButton = content.previousElementSibling;

    // Verifica se o conteúdo está oculto
    const estaOculto = content.style.display === "none" || !content.style.display;

    // Alterna estados
    content.style.display = estaOculto ? "block" : "none";
    bottomButton.style.display = estaOculto ? "block" : "none";
    topButton.textContent = estaOculto ? "Esconder Conteúdo ▲" : "Mostrar Conteúdo ▼";
}

// Chamar a função ao carregar a página
document.addEventListener("DOMContentLoaded", gerarChecklist);

let relatorioCompleto = false; // Começa no modo filtrado

// Botão de toggle
document.getElementById("toggleModo").addEventListener("click", (e) => {
    relatorioCompleto = !relatorioCompleto;
    const botao = e.target;
    botao.textContent = `Preenchimento Automático: ${relatorioCompleto ? "Ligado" : "Desligado"}`;
    botao.classList.toggle("ativo", relatorioCompleto);
});
// Rastrear alterações nas perguntas
document.addEventListener("change", (e) => {
    if (e.target.classList.contains("status")) {
        e.target.dataset.modified = "true";
    }
});

// Evento de submit modificado
form.addEventListener("submit", event => {
    event.preventDefault();
    
    let relatorio = "Relatório de Visita:\n";
    const secoes = {};

    // Processar todas as perguntas
    perguntas.forEach(secao => {
        if (!secoes[secao.secaoId]) {
            secoes[secao.secaoId] = {
                categoria: secao.categoria,
                itens: []
            };
        }
        
        secao.itens.forEach(pergunta => {
            const statusElement = document.getElementById(pergunta.id);
            const justificativaElement = document.querySelector(`[name='justificativa_${pergunta.id}']`);
            
            // Verificar se deve incluir no relatório
            const incluir = relatorioCompleto 
            ? true 
            : (statusElement.dataset.modified === "true" || justificativaElement?.value.trim());

            if (incluir) {
                secoes[secao.secaoId].itens.push({
                    texto: pergunta.texto,
                    status: statusElement.value,
                    justificativa: justificativaElement?.value.trim() || ""
                });
            }
        });
    });

    // Montar relatório
    Object.values(secoes).forEach(secao => {
        if (secao.itens.length > 0) {
            relatorio += `\n=== ${secao.categoria} ===\n`;
            secao.itens.forEach(item => {
                relatorio += `${item.texto}: ${item.status.toUpperCase()}\n`;
                if (item.justificativa) {
                    relatorio += `Justificativa: ${item.justificativa}\n`;
                }
            });
        }
    });

    // Adicionar observações
    const observacao = document.getElementById("observacao").value.trim();
    if (observacao) {
        relatorio += `\nObservações:\n${observacao}\n`;
    }
    
    relatorioElement.textContent = relatorio;
});