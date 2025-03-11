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
            {id: "ambiente_limpo_dml", texto: "HÁ AMBIENTE LIMPO E ORGANIZADO COM REGISTRO DE LIMPEZA ATUALIZADO?"},
            {id: "lixeira_dml", texto: "HÁ LIXEIRA PROVIDA DE PEDAL E TAMPA ADEQUADAMENTE IDENTIFICADA, CONFORME RDC Nº 222/2018?"},
            {id: "utensiolios_dml", texto: "HÁ DML COM UTENSÍLIOS DE LIMPEZA ORGANIZADOS?"},
            {id: "ficha_limpeza_dml", texto: "HÁ FICHA TÉCNICA DOS MATERIAIS DE LIMPEZA?"},
            {id: "diluiçao_dml", texto: "HÁ POP PARA DILUIÇÃO DE PRODUTOS?"},
            {id: "cronograma_limpeza_dml", texto: "HÁ CRONOGRAMA GERAL DE LIMPEZA CONCORRENTE E TERMINAL?"},
            {id: "capacitaçao_profissionais_dml", texto: "HÁ REGISTRO DE TREINAMENTO/CAPACITAÇÃO DOS PROFISSIONAIS?"},
            {id: "epi_dml", texto: "HÁ EPI DISPONÍVEIS EM QUANTIDADE SUFICIENTES?"}
        ]
    },
    {
        secaoId: "checklist-seção1",
        categoria: "1.8 Organização Geral",
        itens: [
            {id: "pintura_interna_orgeral", texto: "HÁ PINTURA INTERNA E EXTERNA PADRONIZADA DE ACORDO COM MANUAL DE IDENTIDADE VISUAL DE ASCOM?"},
            {id: "pintura_externaboa_orgeral", texto: "A PINTURA INTERNA E EXTERNA ENCONTRAM-SE EM BOA CONDIÇÃO GERAL?"},
            {id: "limpeza_externa_orgeral", texto: "LIMPEZA EXTERNA ESTÁ ADEQUADA?"},
            {id: "cronograma_limpeza_orgeral", texto: "HÁ CRONOGRAMA DE LIMPEZA DE CALHAS, VIDROS E JARDINAGEM?"},
            {id: "cartazes_orgeral", texto: "HÁ CARTAZES E/OU INFORMATIVOS EM GERAL ATUALIZADOS E EM PAINEIS OU SUPORTES ADEQUADOS?"}
        ]
    },
    {
        secaoId: "checklist-seção1",
        categoria: "1.9 Acessibilidade",
        itens: [
            {id: "acessibilidade_pcd_acessibilidade", texto: "HÁ ACESSIBILIDADE A TODOS OS SERVIÇOS PARA PESSOAS COM DEFICIÊNCIA OU COM MOBILIDADE REDUZIDA ?"},
            {id: "piso_tatil_", texto: "HÁ PISO TÁTIL EM BOM ESTADO?"}
        ]
    },
    {
        secaoId: "checklist-seção1",
        categoria: "1.10 Outras Questões",
        itens: [
            {id: "fraldario_outrasquestoes", texto: "HÁ LOCAL PARA TROCADOR (FRALDÁRIO)?"},
            {id: "extintores_outrasquestoes", texto: "HÁ EXTINTORES EM LOCAL ADEQUADO E DENTRO DA VALIDADE? "},
            {id: "rotas_fuga_outrasquestoes", texto: "HÁ IDENTIFICAÇÃO DE ROTAS DE FUGA?"},
            {id: "bebedouro_outrasquestoes", texto: "HÁ BEBEDOURO PARA OS USUÁRIOS FUNCIONANDO E COM MANUTENÇÃO PREVENTIVA ATUALIZADA? "},
            {id: "ventilação_outrasquestoes", texto: "HÁ VENTILAÇÃO E ILUMINAÇÃO SUFICIENTES E ADEQUADAS?"},
            {id: "telas_outrasquestoes", texto: "HÁ TELAS MILIMÉTRICAS EM TODAS AS JANELAS?"},
            {id: "local_residuos_outrasquestoes", texto: "HÁ LOCAL FECHADO E ADEQUADO PARA RESÍDUOS, DE ACORDO COM A RDC 222/2018?"},
            {id: "pisos_lavaveis_outrasquestoes", texto: "HÁ PISOS E PAREDES COM REVESTIMENTOS QUE SEJAM LAVÁVEIS, OU SEJA, RESISTENTES A LIMPEZA COM ÁGUA E SABÃO?"},
            {id: "dispenser_outrosquestoes", texto: "HÁ DISPENSER FUNCIONANDO E ABASTECIDO DE ÁLCOOL ESPUMA 70% NOS CORREDORES PARA ANTISSEPSIA? "},
            {id: "mobiliario_outrasquestoes", texto: "HÁ MOBILIÁRIO EM BOM ESTADO?"},
            {id: "longarinas_outrasquestoes", texto: "HÁ LONGARINAS, POLTRONAS E MACAS COM ESTOFAMENTO LAVÁVEL E ÍNTEGRO?"},
            {id: "area_gases_outrasquestoes", texto: "HA ÁREA DE GASES DEVIDAMENTE LOCALIZADA, COM CILINDROS ANCORADOS E PROTEGIDOS POR GRADES? "},
            {id: "armarios_outrasquestoes", texto: "HÁ ÁRMARIOS PARA OS PROFISSIONAIS GUARDAREM OS SEUS PERTENCES?"},
            {id: "area_coletiva_outrasquestoes", texto: "HÁ ÁREA ADEQUADA PARA ATIVIDADES COLETIVAS (EDUCATIVAS, PRÁTICAS FÍSICAS, PICS)?"}
        ]
    },
    {
        secaoId: "checklist-seção2",
        categoria: "Recepção, Prontuário, Same",
        itens: [
            {id: "ambiente_limpo_recpeçãoSAME", texto: "HÁ AMBIENTE LIMPO E ORGANIZADO COM REGISTRO DE LIMPEZA ATUALIZADO?"},
            {id: "lixeira_pedal_recpeçãoSAME", texto: "HÁ LIXEIRA PROVIDA DE PEDAL E TAMPA ADEQUADAMENTE IDENTIFICADA, CONFORME RDC Nº 222/2018?"},
            {id: "ventilação_recpeçãoSAME", texto: "HÁ VENTILAÇÃO E ILUMINAÇÃO SUFICIENTES E ADEQUADAS?"},
            {id: "monitoramento_temperatura_recpeçãoSAME", texto: "HÁ MONITORAMENTO DE TEMPERATURA E HUMIDADE (TERMOHIGRÔMETRO)?"},
            {id: "mobiliario_recpeçãoSAME", texto: "HÁ MOBILIÁRIO EM BOM ESTADO?"},
            {id: "longarinas_recpeçãoSAME", texto: "HÁ LONGARINAS, POLTRONAS E MACAS COM ESTOFAMENTO LAVÁVEL E ÍNTEGRO?"},
            {id: "pisos_lavaveis_recpeçãoSAME", texto: "HÁ PISOS E PAREDES COM REVESTIMENTOS QUE SEJAM LAVÁVEIS, OU SEJA, RESISTENTES A LIMPEZA COM ÁGUA E SABÃO?"},
            {id: "controle_acesso_same_recpeçãoSAME", texto: "HÁ CONTROLE DE ACESSO AO SAME?"},
            {id: "protuarios_fisicos_recpeçãoSAME", texto: "HÁ PRONTUÁRIOS FÍSICOS ORGANIZADOS ADEQUADAMENTE?"},
            {id: "prontuarios_estado_recpeçãoSAME", texto: "HÁ PRONTUÁRIOS FÍSICOS EM BOM ESTADO DE CONSERVAÇÃO?"},
            {id: "registro_prontuario_recpeçãoSAME", texto: "HÁ REGISTRO DE INATIVAÇÃO (ARQUIVO MORTO) DE PRONTUÁRIOS? "},
            {id: "fluxo_movimentação_recpeçãoSAME", texto: "HÁ FLUXO DE MOVIMENTAÇÃO DE PRONTUÁRIOS (RASTREABILIDADE)? "},
            {id: "balcao_atendimento_recpeçãoSAME", texto: "BALCÃO DE ATENDIMENTO É ORGANIZADO E LIVRE DE OBJETOS PESSOAIS?"},
            {id: "cadeiras_atendimento_recpeçãoSAME", texto: "HÁ CADEIRAS NOS BALCÕES PARA ATENDIMENTO AO USUÁRIO? "},
            {id: "rotina_cadastral_recpeçãoSAME", texto: "HÁ ROTINA DE ATUALIZAÇÃO DE DADOS CADASTRAIS DO USUÁRIO?"},
            {id: "unidade_agendafacil_recpeçãoSAME", texto: "A UNIDADE DISPONIBILIZA VAGAS PARA O AGENDA FÁCIL?"},
            {id: "plano_contigencia_recpeçãoSAME", texto: "HÁ PLANO DE CONTINGÊNCIA PARA QUEDAS DE ENERGIA E DE INTERNET?"},
            {id: "unidade_atendimento_presencial_recpeçãoSAME", texto: "A UNIDADE REALIZA ATENDIMENTO PREFERENCIAL, DE ACORDO COM A LEGISLAÇÃO VIGENTE?"},
        ]
    },
    {
        secaoId: "checklist-seção3",
        categoria: "Bens Patrimoniais Móveis",
        itens: [
            {id: "bens_inserviveis_patrimoniais", texto: "OS FLUXOS RELACIONADOS AOS BENS INSERVÍVEIS ESTÃO SENDO SEGUIDOS?"},
            {id: "inventario_periodico_patrimoniais", texto: "REALIZA INVENTÁRIO PERIODICAMENTE?"},
            {id: "registro_movimentação_patrimoniais", texto: "HÁ REGISTROS DE MOVIMENTAÇÃO DE BENS PATRIMONIAIS?"},
            {id: "bens_inserviveis_SEI_patrimoniais", texto: "NO CASO DE EXISTÊNCIA DE BENS INSERVÍVEIS PARA RETIRADA, HÁ PROCESSO SEI INSTRUÍDO?"},
            {id: "bens_inserviveis_separados_patrimoniais", texto: "NO CASO DE EXISTÊNCIA DE BENS INSERVÍVEIS PARA RETIRADA, ESTÃO SEPARADOS, IDENTIFICADOS E ACOMODADOS ADEQUADAMENTE?"},
            {id: "bens_identificados_patrimoniais", texto: "OS BENS PATRIMONIAIS ESTÃO COM IDENTIFICAÇÃO ATUALIZADAS (NÃO HÁ PLACA DE IDENTIFICAÇÃO DE OUTRO PARCEIRO?)"}
        ]
    },
    {
        secaoId: "checklist-seção4",
        categoria: "Acesso e Acolhimento",
        itens: [
            {id: "demanda_unidade_acolhimento", texto: "HÁ ACOLHIMENTO E ATENDIMENTO À DEMANDA ESPONTÂNEA DURANTE TODO O HORÁRIO DE FUNCIONAMENTO DA UNIDADE?"},
            {id: "profissionais_superior_acolhimento", texto: "TODOS OS PROFISSIONAIS DE NÍVEL SUPERIOR UTILIZAM AGENDA NO SIGA SAÚDE?"},
            {id: "agendas_configuradas_acolhimento", texto: "AS AGENDAS ESTÃO CONFIGURADAS CONFORME AS DIRETRIZES DA SMS (TEMPO DE LIBERAÇÃO, REPOSIÇÃO DE VAGAS, IMPEDIMENTOS, GRUPOS, VIGÊNCIA, HORÁRIO DE ATENDIMENTO)?"},
            {id: "unidade_siga_atendimento_acolhimento", texto: "A UNIDADE INSERE NO SIGA EM TEMPO REAL O ATENDIMENTO REALIZADO POR DEMANDA ESPONTÂNEA?"},
            {id: "orientação_fluxo_unidade_acolhimento", texto: "HÁ ORIENTAÇÃO AOS USUÁRIOS SOBRE OS FLUXOS DE ATENDIMENTO DA UNIDADE?"},
            {id: "organização_fila_acolhimento", texto: "HÁ ORGANIZAÇÃO DA FILA DE ENTRADA DOS USUÁRIOS E DIRECIONAMENTO AOS SETORES DA UNIDADE?"}
        ]
    },
     {
        secaoId: "checklist-seção5",
        categoria: "RH",
        itens: [
            {id: "deficit_medica_rh", texto: "HÁ DÉFICIT DE RH NA CATEGORIA MÉDICA?"},
            {id: "deficit_equipe_multiprofiossional_rh", texto: "HÁ DÉFICIT DE RH NA CATEGORIA DE EQUIPE MULTIPROFISSIONAL?"},
            {id: "deficit_saude_bucal_rh", texto: "HÁ DÉFICIT DE RH NA CATEGORIA DE SAÚDE BUCAL?"},
            {id: "deficit_enfermagem_rh", texto: "HÁ DÉFICIT DE RH NA CATEGORIA DA ENFERMAGEM?"},
            {id: "deficit_administrativo_rh", texto: "HÁ DÉFICIT DE RH NA CATEGORIA DE ADMINISRATIVOS?"},
            {id: "organização_fila_unidade_rh", texto: "HÁ ORGANIZAÇÃO DA FILA DE ENTRADA DOS USUÁRIOS E DIRECIONAMENTO AOS SETORES DA UNIDADE?"},
            {id: "deficit_outra_categoria_rh", texto: "HÁ DÉFICIT DE RH EM OUTRA CATEGORIA?"},
            {id: "cobertura_profissional_afastado_rh", texto: "HÁ COBERTURA PARA OS PROFISSIONAIS QUE ESTÃO AFASTADOS? "},
            {id: "profissionais_pj_rh", texto: "HÁ PROFISSIONAIS CONTRATADOS COMO PJ? "},
            {id: "data_visita_profissional_rh", texto: "NA DATA DA VISITA A FREQUÊNCIA DOS PROFISSIONAIS ESTAVA APONTADA REGULARMENTE?"},
            {id: "escala_profissionais_rh", texto: "HÁ ESCALA DE PROFISSIONAIS? "},
            {id: "epi_necessario_rh", texto: "FAZ-SE USO DE EPI NECESSÁRIOS?"},
            {id: "controle_entrega_rh", texto: "FAZ-SE CONTROLE DE ENTREGA DE EPI?"},
            {id: "uniformes_desprovidos_adornos_rh", texto: "FAZ-SE USO ADEQUADO DE UNIFORMES DESPROVIDOS DE ADORNOS?"},
            {id: "avental_sms_parceiro_rh", texto: "FAZ USO DE AVENTAL COM LOGO DE SMS E DA INSTITUIÇÃO PARCEIRO (SE ADM. INDIRETA) ?"},
            {id: "cracha_identificação_rh", texto: "FAZ-SE USO DE CRACHÁ DE IDENTIFICAÇÃO?"},
            {id: "notificação_acidente_unidade_rh", texto: "FAZ-SE NOTIFICAÇÃO DE ACIDENTE DE TRABALHO DA UNIDADE?"}
        ]
    },
    {
        secaoId: "checklist-seção6",
        categoria: "Saúde Bucal",
        itens: [
            { id: "ventilacao_iluminacao_suficiente_saude_bucal", texto: "HÁ VENTILAÇÃO E ILUMINAÇÃO SUFICIENTES E ADEQUADAS?" },
            { id: "lixeira_pedal_tampa_rdc222_saude_bucal", texto: "HÁ LIXEIRA PROVIDA DE PEDAL E TAMPA ADEQUADAMENTE IDENTIFICADA, CONFORME RDC Nº 222/2018?" },
            { id: "dispenser_suportes_abastecidos_saude_bucal", texto: "HÁ DISPENSER E SUPORTES EM QUANTIDADE SUFICIENTE, ABASTECIDOS E FUNCIONANDO?" },
            { id: "ambiente_limpo_organizado_saude_bucal", texto: "HÁ AMBIENTE LIMPO E ORGANIZADO COM REGISTRO DE LIMPEZA ATUALIZADO?" },
            { id: "consultorio_odontologico_barreira_saude_bucal", texto: "HÁ CONSULTÓRIO ODONTOLÓGICO ADEQUADO QUANTO À INDIVIDUALIZAÇÃO DO ESPAÇO DAS CADEIRAS ODONTOLÓGICAS, ATRAVÉS DE BARREIRA FÍSICA DO CHÃO AO TETO?" },
            { id: "tcle_assinado_saude_bucal", texto: "HÁ TCLE ASSINADO PELO PACIENTE /OU RESPONSÁVEL?" },
            { id: "material_esterilizado_armazenado_saude_bucal", texto: "O MATERIAL ESTERILIZADO ENCONTRA-SE ARMAZENADO EM LOCAL APROPRIADO?" },
            { id: "material_esterilizado_identificacao_saude_bucal", texto: "O MATERIAL ESTERILIZADO ENCONTRA-SE DEVIDAMENTE IDENTIFICADO COM DADOS DE RASTREABILIDADE (DATA DE ESTERILIZAÇÃO, VALIDADE E RESPONSÁVEL)?" },
            { id: "caixa_residuo_perfurocortante_saude_bucal", texto: "HÁ CAIXA PARA RESÍDUO PÉRFURO CORTANTE E SUPORTE?" },
            { id: "identificacao_data_insumos_saude_bucal", texto: "HÁ IDENTIFICAÇÃO DA DATA DE ABERTURA DOS INSUMOS?" },
            { id: "rastreamento_insumos_acondicionados_saude_bucal", texto: "OS INSUMOS (EX. GESSO), ACONDICIONADOS EM RECIPIENTES QUE NÃO OS SEUS DE ORIGEM, POSSUEM DADOS QUE PERMITAM A SUA RASTREABILIDADE (FORNECEDOR, LOTE, VALIDADE)?" },
            { id: "triagem_classificacao_risco_saude_bucal", texto: "HÁ REALIZAÇÃO DE TRIAGEM DE CLASSIFICAÇÃO DE RISCO PARA ACESSO AO TRATAMENTO ODONTOLÓGICO REGULARMENTE A CADA SETE OU DEZ DIAS?" },
            { id: "documentos_tecnicos_saude_bucal", texto: "OS PROFISSIONAIS TEM CONHECIMENTO E UTILIZAM OS DOCUMENTOS TÉCNICOS DE SAÚDE BUCAL DA ATENÇÃO BÁSICA DA SMS, EM ESPECIAL O DE SEGURANÇA DO PACIENTE NA SAÚDE BUCAL?" },
            { id: "dentistas_realizam_protese_saude_bucal", texto: "TODOS OS DENTISTAS DA UNIDADE REALIZAM PRÓTESE DENTÁRIA?" }
        ]
        
    },
    {
        secaoId: "checklist-seção7",
        categoria: "Documentação",
        itens: [
            { id: "laudo_cmvs_alvara_sanitario_documentação", texto: "HÁ LAUDO CMVS – ALVARÁ SANITÁRIO?" },
            { id: "laudos_atualizados_avcb_documentação", texto: "HÁ LAUDOS ATUALIZADOS DE AVCB?" },
            { id: "laudos_limpeza_caixa_agua_documentação", texto: "HÁ LAUDOS ATUALIZADOS DE LIMPEZA DE CAIXA D'ÁGUA?" },
            { id: "laudos_potabilidade_agua_documentação", texto: "HÁ LAUDOS ATUALIZADOS DE POTABILIDADE DA ÁGUA?" },
            { id: "laudos_dedetizacao_documentação", texto: "HÁ LAUDOS ATUALIZADOS DE DEDETIZAÇÃO?" },
            { id: "pcmso_atualizado_documentação", texto: "HÁ PCMSO ATUALIZADO - PROGRAMA DE CONTROLE MÉDICO DE SAÚDE OCUPACIONAL?" },
            { id: "pgrss_atualizado_documentação", texto: "HÁ PGRSS ATUALIZADO - PLANO DE GERENCIAMENTO DE RESÍDUOS DO SERVIÇO DE SAÚDE?" },
            { id: "pgr_atualizado_documentação", texto: "HÁ PGR ATUALIZADO - PROGRAMA DE GERENCIAMENTO DE RISCOS?" },
            { id: "livro_ocorrencias_documentação", texto: "HÁ LIVRO DE OCORRÊNCIAS?" },
            { id: "controle_ordens_servico_documentação", texto: "HÁ CONTROLE DE ORDENS DE SERVIÇOS ABERTAS COM REGISTRO DE ACOMPANHAMENTO?" },
            { id: "cronograma_manutencao_equipamentos_documentação", texto: "HÁ CRONOGRAMA PARA MANUTENÇÕES PREVENTIVAS DE EQUIPAMENTOS MÉDICO ASSISTENCIAIS?" },
            { id: "registros_manutencoes_realizadas_documentação", texto: "HÁ REGISTROS DAS MANUTENÇÕES CORRETIVAS/PREVENTIVAS REALIZADAS, INCLUINDO OS EQUIPAMENTOS DE AR CONDICIONADO, CÂMARAS DE REFRIGERAÇÃO ETC.?" },
            { id: "plano_contingencia_documentação", texto: "HÁ PLANO DE CONTINGÊNCIA PARA ENERGIA ELÉTRICA, ABASTECIMENTO DE ÁGUA, INTERNET, QUEDA DE SISTEMA - INCLUSIVE EM HORÁRIO FORA DO EXPEDIENTE?" },
            { id: "caracterizacao_unidade_documentação", texto: "HÁ CARACTERIZAÇÃO DA UNIDADE, INCLUINDO PERFIL EPIDEMIOLÓGICO?" },
            { id: "cadastro_amlurb_rdc222_documentação", texto: "HÁ CADASTRO NA AMLURB EM CUMPRIMENTO À RDC Nº 222/2018?" },
            { id: "termos_contrato_terceiros_documentação", texto: "A UNIDADE POSSUI OS TERMOS DE CONTRATO DE TERCEIROS?" },
            { id: "cronograma_limpeza_salas_documentação", texto: "HÁ CRONOGRAMA DE LIMPEZA EM TODAS AS SALAS?" },
            { id: "cronograma_limpeza_vidros_documentação", texto: "HÁ CRONOGRAMA DE LIMPEZA DE VIDROS, TOLDOS, LUMINÁRIAS E VENTILADORES?" },
            { id: "cadastro_cnes_atualizado_documentação", texto: "O ESTABELECIMENTO ESTÁ INSCRITO E MANTÉM SEUS DADOS ATUALIZADOS NO CADASTRO NACIONAL DE ESTABELECIMENTOS DE SAÚDE – CNES?" },
            { id: "qualificacao_validacao_autoclaves_documentação", texto: "POSSUI QUALIFICAÇÃO E VALIDAÇÃO DAS AUTOCLAVES?" },
            { id: "lista_mestra_equipamentos_calibraveis_documentação", texto: "POSSUI UMA LISTA MESTRA COM TODOS OS EQUIPAMENTOS CALIBRÁVEIS DA UNIDADE?" },
            { id: "certificados_calibracao_equipamentos_documentação", texto: "POSSUI OS CERTIFICADOS DE CALIBRAÇÃO DE TODOS OS EQUIPAMENTOS CALIBRÁVEIS DA UNIDADE?" },
            { id: "controle_documentos_funcionarios_documentação", texto: "POSSUI CONTROLE COM CIÊNCIA DOS POP, MANUAIS, DIRETRIZES, PROTOCOLOS, COMUNICADOS E OUTROS DOCUMENTOS ENVIADOS AOS FUNCIONÁRIOS?" }
        ]
    },
    {
        secaoId: "checklist-seção8",
        categoria: "Assistência Farmacêutica",
        itens: [
            { id: "ambiente_limpo_organizado_farmacia", texto: "HÁ AMBIENTE LIMPO E ORGANIZADO COM REGISTRO DE LIMPEZA ATUALIZADO?" },
            { id: "lixeira_pedal_tampa_identificada_farmacia", texto: "HÁ LIXEIRA PROVIDA DE PEDAL E TAMPA ADEQUADAMENTE IDENTIFICADA, CONFORME RDC Nº 222/2018?" },
            { id: "dispenser_suportes_abastecidos_funcionando_farmacia", texto: "HÁ DISPENSER E SUPORTES EM QUANTIDADE SUFICIENTE, ABASTECIDOS E FUNCIONANDO?" },
            { id: "local_armazenamento_injetaveis_farmacia", texto: "HÁ LOCAL ESPECÍFICO E IDENTIFICADO PARA O ARMAZENAMENTO DE INJETÁVEIS?" },
            { id: "prateleiras_bins_suficientes_farmacia", texto: "HÁ PRATELEIRAS E BINS SUFICIENTES PARA ARMAZENAGEM DE MEDICAMENTOS DE ACORDO COM A LEGISLAÇÃO VIGENTE?" },
            { id: "organizacao_validade_proxima_farmacia", texto: "HÁ ORGANIZAÇÃO DE FORMA QUE SEJAM DISPENSADOS PRIORITARIAMENTE OS MEDICAMENTOS COM VALIDADE DE VENCIMENTO MAIS PRÓXIMA?" },
            { id: "medicamentos_afastados_piso_teto_paredes_farmacia", texto: "OS MEDICAMENTOS E INSUMOS ESTÃO AFASTADOS DO PISO, TETO E PAREDES COM ESPAÇAMENTO QUE PERMITE A LIMPEZA ADEQUADA? POSSUEM IDENTIFICAÇÃO DOS ITENS, COM DESCRIÇÃO, LOTE E VALIDADE?" },
            { id: "prateleiras_bins_alfabetica_farmacia", texto: "HÁ PRATELEIRAS E BINS ORGANIZADOS POR ORDEM ALFABÉTICA?" },
            { id: "identificacao_generica_bom_estado_farmacia", texto: "HÁ IDENTIFICAÇÃO DOS MEDICAMENTOS COM DENOMINAÇÃO GENÉRICA EM BOM ESTADO (IDENTIFICAÇÃO POR CORES)?" },
            { id: "blisters_sem_amarracao_inapropriada_farmacia", texto: "HÁ BLISTERS ISENTOS DE AMARRAÇÃO INAPROPRIADA QUE POSSA COMPROMETER A INTEGRIDADE DO MESMO (EX. ELÁSTICO)?" },
            { id: "farmacia_area_adjunta_sem_caixas_farmacia", texto: "FARMÁCIA E ÁREA ADJACENTE ISENTA DE CAIXAS SECUNDÁRIAS E/OU TERCIÁRIAS QUE SÃO UTILIZADAS PARA TRANSPORTE DOS MEDICAMENTOS?" },
            { id: "termohigrometros_certificado_calibracao_farmacia", texto: "TERMOHIGRÔMETROS POSSUEM CERTIFICADO DE CALIBRAÇÃO? ESTÃO VÁLIDOS?" },
            { id: "equipamento_ar_condicionado_funcionando_farmacia", texto: "HÁ EQUIPAMENTO DE AR CONDICIONADO FUNCIONANDO?" },
            { id: "registro_dispensacao_gss_tempo_real_farmacia", texto: "O REGISTRO DA DISPENSAÇÃO DE MEDICAMENTOS NO GSS OCORRE EM TEMPO REAL NA PRESENÇA DO USUÁRIO, COM EXCEÇÃO DOS CASOS DE INDISPONIBILIDADE DO SISTEMA?" },
            { id: "falta_medicamentos_unidade_farmacia", texto: "HÁ FALTA DE ALGUM MEDICAMENTOS NA UNIDADE? EM CASO AFIRMATIVO, VERIFICAR PROVIDÊNCIAS QUANTO AO REMANEJAMENTO." },
            { id: "periodicidade_encerramento_movimentos_gss_farmacia", texto: "QUANTO À PERIODICIDADE DE ENCERRAMENTO DOS MOVIMENTOS NA TELA DE “ESCRITURAÇÃO DE MEDICAMENTOS SUJEITOS A CONTROLE ESPECIAL” DO SISTEMA GSS: “SÃO REALIZADAS SEMANALMENTE?" },
            { id: "checklist_recebimento_medicamentos_materiais_farmacia", texto: "REALIZA CHECK LIST DE RECEBIMENTO DE MEDICAMENTOS E MATERIAIS? MANTÉM REGISTRO?" },
            { id: "manual_diluicao_medicamentos_sms_farmacia", texto: "HÁ MANUAL DE DILUIÇÃO DE MEDICAMENTOS DA SMS IMPRESSO NA FARMÁCIA, SALA DE MEDICAÇÃO, ODONTO, EMERGÊNCIA E OUTROS?" },
            { id: "consulta_farmaceutica_farmacia", texto: "OS FARMACÊUTICOS REALIZAM CONSULTA FARMACÊUTICA?" },
            { id: "farmaceuticos_participam_grupos_farmacia", texto: "OS FARMACÊUTICOS PARTICIPAM DE GRUPOS?" },
            { id: "relacao_medicamentos_dispensa_visivel_farmacia", texto: "HÁ RELAÇÃO DE MEDICAMENTOS DE DISPENSAÇÃO VISÍVEL AO USUÁRIO - REMUME?" },
            { id: "revisao_periodica_cmm_farmacia", texto: "HÁ REVISÃO PERIÓDICA DO CMM, CONSIDERANDO, INCLUSIVE, A SAZONALIDADE?" },
            { id: "medicamentos_termolabeis_armazenados_farmacia", texto: "OS MEDICAMENTOS TERMOLÁBEIS ESTÃO ARMAZENADOS DE ACORDO COM PROCEDIMENTO OPERACIONAL PADRÃO VIGENTE? (NÃO ARMAZENAR NA PORTA)" },
            { id: "registro_diario_temperatura_umidade_farmacia", texto: "HÁ REGISTRO DIÁRIO DE TEMPERATURA E UMIDADE DO AMBIENTE?" },
            { id: "identificacao_medicamentos_alto_risco_farmacia", texto: "HÁ IDENTIFICAÇÃO (BARREIRA) PARA MEDICAMENTOS DE ALTO RISCO E/OU POTENCIALMENTE PERIGOSOS - MAR/MPP?" },
            { id: "medicamentos_controlados_portaria_344_farmacia", texto: "HÁ MEDICAMENTOS CONTROLADOS ARMAZENADOS DE ACORDO COM A PORTARIA Nº MS 344/1998?" },
            { id: "monitoramento_validade_medicamentos_farmacia", texto: "FAZ-SE MONITORAMENTO DA VALIDADE DOS MEDICAMENTOS?" },
            { id: "unitarizacao_medicamentos_legislacao_farmacia", texto: "REALIZA UNITARIZAÇÃO DE MEDICAMENTOS DE ACORDO COM A LEGISLAÇÃO VIGENTE?" },
            { id: "controle_rastreabilidade_medicamentos_farmacia", texto: "REALIZA CONTROLE E RASTREABILIDADE DE TODOS OS MEDICAMENTOS DA UNIDADE (EMERGÊNCIA, SALA DE MEDICAÇÃO, ODONTOLOGIA ETC.)?" },
            { id: "certidao_regularidade_crf_sp_farmacia", texto: "HÁ CERTIDÃO DE REGULARIDADE EMITIDA PELO CRF-SP? SE SIM, ESTÁ VISÍVEL AOS USUÁRIOS?" },
            { id: "lista_medicamentos_inapropriados_idosos_farmacia", texto: "HÁ LISTA DE MEDICAMENTOS INAPROPRIADOS PARA IDOSOS (SALA DO IDOSO E CONSULTÓRIOS)?" },
            { id: "controle_mensal_validades_emergencia_farmacia", texto: "HÁ CONTROLE MENSAL DAS VALIDADES DOS MEDICAMENTOS DO CARRINHO DE EMERGÊNCIA JUNTO COM A EQUIPE DE ENFERMAGEM?" },
            { id: "pops_impressos_visiveis_farmacia", texto: "OS POPS ESTÃO IMPRESSOS E VISÍVEIS AOS FUNCIONÁRIOS DO SETOR?" },
            { id: "pia_torneira_pedal_farmacia", texto: "HÁ PIA COM TORNEIRA, PREFERENCIALMENTE COM ACIONAMENTO POR PEDAL OU OUTRO MECANISMO QUE EVITE A CONTAMINAÇÃO DAS MÃOS?" }
        ]
    }       
];


function gerarChecklist() {
    perguntas.forEach(secao => {
        const container = document.getElementById(secao.secaoId);
        if (!container) return; // Se a seção não existir, ignore

        // Criar um fieldset para cada categoria dentro da seção
        const fieldset = document.createElement("fieldset");
        const legend = document.createElement("legend");
        legend.textContent = secao.categoria;
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

// Chamar a função ao carregar a página
document.addEventListener("DOMContentLoaded", gerarChecklist);

// Salvar e gerar relatório
form.addEventListener("submit", event => {
    event.preventDefault();
    
    let relatorio = "Relatório de Visita:\n";
    console.log("Iniciando geração do relatório...");
    
    form.addEventListener("submit", event => {
        event.preventDefault();
    
        let relatorio = "Relatório de Visita:\n";
    
        perguntas.forEach(secao => {
            relatorio += `\n=== ${secao.categoria} ===\n`;
    
            secao.itens.forEach(pergunta => {
                const statusElement = document.querySelector(`[name='${pergunta.id}']`);
                const justificativaElement = document.querySelector(`[name='justificativa_${pergunta.id}']`);
    
                if (statusElement) {
                    const status = statusElement.value;
                    relatorio += `${pergunta.texto}: ${status.toUpperCase()}\n`;
    
                    if (justificativaElement && justificativaElement.value.trim()) {
                        relatorio += `Justificativa: ${justificativaElement.value.trim()}\n`;
                    }
                }
            });
        });
    
        const observacao = document.getElementById("observacao");
        if (observacao && observacao.value.trim()) {
            relatorio += `\nObservações:\n${observacao.value.trim()}\n`;
        }
    
        relatorioElement.textContent = relatorio;    
    });
    
    const observacao = document.getElementById("observacao").value.trim();
    if (observacao) {
        relatorio += `\nObservações:\n${observacao}\n`;
        console.log(`Observações: ${observacao}`);
    }
    
    relatorioElement.textContent = relatorio;
    console.log("Relatório gerado com sucesso.");
});

// Exportar relatório como arquivo de texto
exportButton.addEventListener("click", () => {
    const blob = new Blob([relatorioElement.textContent], { type: "text/plain" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "relatorio_visita.txt";
    a.click();
});
    const observacao = document.getElementById("observacao").value.trim();
    if (observacao) {
        relatorio += `\nObservações:\n${observacao}\n`;
    }
    
    relatorioElement.textContent = relatorio;
