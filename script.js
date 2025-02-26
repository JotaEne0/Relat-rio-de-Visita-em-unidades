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
        categoria: "RECEPÇÃO, PRONTUÁRIO, SAME",
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
