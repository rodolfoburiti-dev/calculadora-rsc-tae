// Dados dos níveis RSC
const rscLevels = {
    'RSC-1': { min_points: 10, min_items: 2, escolaridade: 'Ensino Fundamental incompleto' },
    'RSC-2': { min_points: 20, min_items: 3, escolaridade: 'Ensino Fundamental completo' },
    'RSC-3': { min_points: 25, min_items: 4, escolaridade: 'Ensino Médio completo' },
    'RSC-4': { min_points: 30, min_items: 5, escolaridade: 'Graduação completa' },
    'RSC-5': { min_points: 52, min_items: 8, escolaridade: 'Pós-graduação (lato sensu)' },
    'RSC-6': { min_points: 75, min_items: 12, escolaridade: 'Mestrado completo' }
};

// Dados dos itens de saberes e competências
const rscItems = [
    {
        id: 1,
        saber_competencia: "Atuação na área de gestão e/ou fiscalização de contratos, convênios e acordos",
        descricao: "Atuação na gestão e/ou fiscalização de contratos, convênios e acordos firmados pela Instituição Federal de Ensino (IFE) com fornecedores, prestadores de serviços, instituições públicas ou privadas, tanto nacionais quanto internacionais.",
        unidade_medida: "Tempo (mês)",
        pontuacao_por_unidade: 0.1
    },
    {
        id: 2,
        saber_competencia: "Atuação como suplente na área de gestão e/ou fiscalização de contratos, convênios e acordos",
        descricao: "Atuação como suplente na gestão e/ou fiscalização de contratos, convênios e acordos firmados pela Instituição Federal de Ensino (IFE) com fornecedores, prestadores de serviços, instituições públicas ou privadas, tanto nacionais quanto internacionais.",
        unidade_medida: "Tempo (mês)",
        pontuacao_por_unidade: 0.05
    },
    {
        id: 3,
        saber_competencia: "Atuação em comissões de corregedoria ou correição",
        descricao: "Atuação do servidor em atividades de corregedoria ou correição",
        unidade_medida: "Por portaria de designação, incluídas as prorrogações",
        pontuacao_por_unidade: 2.5
    },
    {
        id: 4,
        saber_competencia: "Atuação em processo licitatório de aquisição e contratação",
        descricao: "Atuação do servidor nas fases interna e externa dos processos licitatórios e contratos administrativos: I - preparatória; II - de divulgação do edital de licitação; III - de apresentação de propostas e lances, quando for o caso; IV - de julgamento; V - de habilitação; VI - recursal; VII - de homologação.",
        unidade_medida: "Por processo licitatório",
        pontuacao_por_unidade: 1
    },
    {
        id: 5,
        saber_competencia: "Desenvolvimento de tecnologias e soluções práticas que tenham impacto institucional",
        descricao: "Valorização do servidor a partir de soluções práticas com impacto institucional incluem desde a criação de novos procedimentos internos, melhorias em sistemas de gestão, desenvolvimento de novas tecnologias, até a simplificação de processos administrativos.",
        unidade_medida: "Por solução (evento)",
        pontuacao_por_unidade: 6.25
    },
    {
        id: 6,
        saber_competencia: "Elaboração de editais",
        descricao: "Participação na organização de congresso, simpósio, conferência, colóquio, mesa redonda, workshop, seminário, debate, mostra, feira, minicursos, eventos científicos, técnico, esportivos, sociais, artísticos, culturais, sindicais e filantrópicos.",
        unidade_medida: "Por edital",
        pontuacao_por_unidade: 0.125
    },
    {
        id: 7,
        saber_competencia: "Elaboração de notas técnicas, chamadas públicas, pareceres técnicos, nota informativa, manuais e roteiros técnicos ou documentação similar",
        descricao: "Elaboração de documentos institucionais normativos, orientativos e regulatórios que auxiliam na tomada de decisões, na regulamentação de processos e na comunicação oficial da instituição.",
        unidade_medida: "Por notas técnicas, chamadas públicas, pareceres técnicos, nota informativa ou documentação similar",
        pontuacao_por_unidade: 1.25
    },
    {
        id: 8,
        saber_competencia: "Elogio profissional",
        descricao: "Menção nominal e por escrito, concedida ao servidor em razão de atuação destacada em suas funções, com grande relevância e repercussão institucional",
        unidade_medida: "Por portaria (evento)",
        pontuacao_por_unidade: 1.25
    },
    {
        id: 9,
        saber_competencia: "Participação como membro de comissão organizadora de processo seletivo, vestibular, concurso ou exames públicos",
        descricao: "Atuação como membro de comissão organizadora de concurso/exame público responsável pelo planejamento do concurso /exame público e gerenciamento de todas as fases do concurso.",
        unidade_medida: "Por Edital (evento)",
        pontuacao_por_unidade: 1
    },
    {
        id: 10,
        saber_competencia: "Participação como membro de comissão responsável por processo seletivo, vestibular, concurso ou exames públicos",
        descricao: "Atuação como membro de comissões responsáveis pela organização, condução e avaliação de processos seletivos, vestibulares ou concursos públicos.",
        unidade_medida: "Por Edital (evento)",
        pontuacao_por_unidade: 1
    },
    {
        id: 11,
        saber_competencia: "Participação como membro em grupos, núcleos e comissões de políticas públicas inclusivas e afirmativas (heteroidentificação, gênero, diversidade, avaliação socioeconômica, PCD, avaliação de cotas)",
        descricao: "Atuação em comissões voltadas para a implementação, avaliação e fiscalização de políticas públicas inclusivas e afirmativas.",
        unidade_medida: "Por declaração ou certificado de participação",
        pontuacao_por_unidade: 1
    },
    {
        id: 12,
        saber_competencia: "Participação como membro em comissões, comitês, grupos de trabalho e grupo de estudos em organizações privadas, entidades profissionais ou organizações da sociedade civil",
        descricao: "Atuação como membro em comissões, comitês, grupos de trabalho e grupo de estudos em organizações privadas, entidades profissionais ou organizações da sociedade civil.",
        unidade_medida: "Por declaração/documento oficial de realização da atividade",
        pontuacao_por_unidade: 1
    },
    {
        id: 13,
        saber_competencia: "Participação como membro titular em comissões, comitês e grupos no âmbito da administração pública",
        descricao: "Atuação como membro titular em comissões, comitês e grupos de trabalho, no âmbito da administração pública, destinados à elaboração, revisão ou atualização de normativos institucionais.",
        unidade_medida: "Por portaria/declaração Comissão /Comitê /GT (evento)",
        pontuacao_por_unidade: 1.25
    },
    {
        id: 14,
        saber_competencia: "Participação como membro suplente em comissões, comitês, grupos previstos no âmbito da administração pública",
        descricao: "Atuação como membro suplente em comissões, comitês ou grupos de trabalho que estão previstos em Leis, Portarias, Estatutos ou Regimentos.",
        unidade_medida: "Por portaria/declaração Comissão /Comitê /GT (evento)",
        pontuacao_por_unidade: 0.5
    },
    {
        id: 15,
        saber_competencia: "Participação em brigadas voluntárias de combate a incêndio e pânico e/ou em ações voluntárias",
        descricao: "Atuação em equipes organizadas para prevenção e combate a incêndios e outras atividades típicas como prestar primeiros socorros.",
        unidade_medida: "Por Ação ou Por participação em Brigada",
        pontuacao_por_unidade: 1
    },
    {
        id: 16,
        saber_competencia: "Participação em comissões de saúde e segurança no trabalho",
        descricao: "Atuação como membro em comissões de saúde e segurança no trabalho na Administração Pública ou em organizações privadas.",
        unidade_medida: "Por mandato/designação. (evento)",
        pontuacao_por_unidade: 1
    },
    {
        id: 17,
        saber_competencia: "Participação em conselhos superiores e órgãos colegiados das IFE",
        descricao: "Atuação em conselhos superiores e órgãos colegiados das Instituições Federais de Ensino Superior (IFES).",
        unidade_medida: "Por mandato/designação. (evento)",
        pontuacao_por_unidade: 2.5
    },
    {
        id: 18,
        saber_competencia: "Participação, no exercício do cargo, em Consultorias e Assessoria Técnica Especializada",
        descricao: "Atuação em atividade de consultoria ou de assessoria técnica especializada em projetos institucionais em matérias vinculadas às atribuições do cargo",
        unidade_medida: "Por consultoria",
        pontuacao_por_unidade: 1
    },
    {
        id: 19,
        saber_competencia: "Participação em programas e políticas públicas externos à instituição",
        descricao: "Atuação em políticas públicas de iniciativa governamental, não governamental ou interinstitucional, que visam à promoção de melhorias sociais, educacionais e administrativas.",
        unidade_medida: "Por programas e políticas públicas (evento)",
        pontuacao_por_unidade: 1
    },
    {
        id: 20,
        saber_competencia: "Participação na coordenação/supervisão, fiscalização, logística de preparação e/ou realização de concurso público ou exames públicos",
        descricao: "Atuação em atividades de coordenação, supervisão e fiscalização de concursos públicos ou exames públicos.",
        unidade_medida: "Por Edital (evento)",
        pontuacao_por_unidade: 0.625
    },
    {
        id: 21,
        saber_competencia: "Tempo de efetivo exercício na carreira",
        descricao: "Tempo acumulado de efetivo exercício do servidor na carreira, inclusive o tempo de cessão e/ou colaboração técnica no âmbito do Ministério da Educação e suas entidades vinculadas",
        unidade_medida: "Tempo (mês)",
        pontuacao_por_unidade: 0.125
    },
    {
        id: 22,
        saber_competencia: "Tempo de serviço e/ou vínculo empregatício em outras instituições públicas e/ou privadas",
        descricao: "Tempo acumulado de exercício em instituições públicas de qualquer esfera administrativa (municipal, estadual, federal), em cargo efetivo ou contrato temporário.",
        unidade_medida: "Tempo (mês)",
        pontuacao_por_unidade: 0.05
    },
    {
        id: 23,
        saber_competencia: "Trabalho desenvolvido em órgãos estatais e/ou paraestatais, escolas de governo, agências reguladoras, organismo internacionais",
        descricao: "Atuação em órgãos estatais e/ou paraestatais, Escolas de Governo, Agências Reguladoras ou Organismos Internacionais",
        unidade_medida: "Ano completo (tempo)",
        pontuacao_por_unidade: 0.5
    },
    {
        id: 24,
        saber_competencia: "Trabalho desenvolvido no âmbito do Ministério da Educação e suas entidades vinculadas (cessão e/ou colaboração técnica)",
        descricao: "Atuação em órgãos da estrutura no âmbito do ministério da educação e suas entidades vinculadas, por meio de cessão e/ou colaboração técnica.",
        unidade_medida: "Tempo (mês)",
        pontuacao_por_unidade: 0.05
    },
    {
        id: 25,
        saber_competencia: "Participação como membro da gestão e/ou do conselho fiscal, ou comissão sindical e associações vinculadas às IFE",
        descricao: "Atuação como membro de entidades sindicais ou associações representativas de classe, assumindo responsabilidades na gestão, comissões permanentes, fiscalização e defesa dos interesses da categoria.",
        unidade_medida: "Por mandato (evento)",
        pontuacao_por_unidade: 2.5
    },
    {
        id: 26,
        saber_competencia: "Participação como membro em comissões permanentes e/ou assessorias instituídas por lei",
        descricao: "Atuação como membro em comissões permanentes e/ou assessorias instituídas por lei",
        unidade_medida: "Por mandato (evento)",
        pontuacao_por_unidade: 2.5
    },
    {
        id: 27,
        saber_competencia: "Participação como membro de comissão de consulta/eleitoral",
        descricao: "Atuação como membro de comissões responsáveis pela organização e condução de processos de consulta pública ou eleitoral.",
        unidade_medida: "Por consulta/eleição (evento)",
        pontuacao_por_unidade: 1
    },
    {
        id: 28,
        saber_competencia: "Participação como membro em conselho profissional",
        descricao: "Atuação como membro efetivo em conselhos profissionais regulamentados, que são responsáveis pela fiscalização e regulação do exercício de determinadas profissões no Brasil",
        unidade_medida: "Mandato (evento)",
        pontuacao_por_unidade: 0.5
    },
    {
        id: 29,
        saber_competencia: "Participação como membro titular e/ou suplente da Comissão Interna de Supervisão da carreira (CIS) e outras comissões correlatas.",
        descricao: "Atuação como membro titular e/ou suplente da Comissão Interna de Supervisão da Carreira (CIS)",
        unidade_medida: "Por ano de mandato",
        pontuacao_por_unidade: 0.5
    },
    {
        id: 30,
        saber_competencia: "Participação na organização de eventos pedagógicos, educacionais, científicos, tecnológicos, esportivos, sociais, sindical, filantrópicos ou culturais",
        descricao: "Atuação no processo de planejamento e organização de eventos, incluindo a sua concepção, pré-evento, per ou transevento e pós-evento.",
        unidade_medida: "Por certificado / declaração",
        pontuacao_por_unidade: 1
    },
    {
        id: 31,
        saber_competencia: "Representação institucional em conselhos e/ou órgãos municipais, estaduais e federais, organizações sociais, assistenciais e/ou sem fins lucrativos",
        descricao: "Atuação como representante institucional em conselhos e/ou órgãos municipais, estaduais e federais, organizações sociais, assistenciais e/ou sem fins lucrativos",
        unidade_medida: "Por portaria/declaração (evento)",
        pontuacao_por_unidade: 1
    },
    {
        id: 32,
        saber_competencia: "Coordenação/presidência de comissões, comitês, grupos de trabalho ou grupo de estudo na administração pública",
        descricao: "Atuação como coordenador em comissões, comitês ou grupos de trabalho no âmbito da administração pública",
        unidade_medida: "Por portaria/declaração (evento)",
        pontuacao_por_unidade: 2.5
    },
    {
        id: 33,
        saber_competencia: "Atuação do servidor como titular e/ou substituto eventual do titular ocupante de Cargo de Direção (CD) ou equivalente.",
        descricao: "Atuação como titular e/ou substituto eventual de cargos de direção (CD)",
        unidade_medida: "Tempo (mês)",
        pontuacao_por_unidade: 0.25
    },
    {
        id: 34,
        saber_competencia: "Atuação do servidor como titular e/ou substituto eventual do titular ocupante de Função Gratificada (FG) ou equivalente.",
        descricao: "Atuação como titular e/ou substituto eventual de Função Gratificada (FG)",
        unidade_medida: "Tempo (mês)",
        pontuacao_por_unidade: 0.125
    },
    {
        id: 35,
        saber_competencia: "Responsável por setor, unidade ou equipe",
        descricao: "Atuação como responsável por setor ou unidade ou responsável técnico por equipe",
        unidade_medida: "Tempo (mês)",
        pontuacao_por_unidade: 0.125
    },
    {
        id: 36,
        saber_competencia: "Proficiência ou curso em LIBRAS e/ou língua estrangeira",
        descricao: "Certificações que comprovem a proficiência ou a participação em cursos de Língua Brasileira de Sinais (LIBRAS) ou de línguas estrangeiras",
        unidade_medida: "Por certificação (evento)",
        pontuacao_por_unidade: 5
    },
    {
        id: 37,
        saber_competencia: "Certificação Profissional na área de atuação",
        descricao: "Certificações profissionais emitidas por instituições reconhecidas, nacionais ou internacionais, que atestem conhecimentos e habilidades específicas relacionadas diretamente à área de atuação do servidor.",
        unidade_medida: "Por certificação (evento)",
        pontuacao_por_unidade: 1.25
    },
    {
        id: 38,
        saber_competencia: "Participação em capacitações como instrutor ou conteudista em curso de formação, de desenvolvimento ou de treinamento",
        descricao: "Atuação como responsável pela concepção, elaboração e/ou transmissão de conteúdos em cursos voltados à formação, desenvolvimento ou treinamento.",
        unidade_medida: "Por curso, independente da carga horária (evento)",
        pontuacao_por_unidade: 1
    },
    {
        id: 39,
        saber_competencia: "Participação em capacitações como tutor, monitor, orientador ou mentor em curso de formação, de desenvolvimento ou de treinamento, incluindo tutoria de estágio probatório",
        descricao: "Atuação em funções de suporte, acompanhamento e orientação de participantes em cursos de formação, desenvolvimento ou treinamento.",
        unidade_medida: "Por participação, independente da carga horária (evento)",
        pontuacao_por_unidade: 0.5
    },
    {
        id: 40,
        saber_competencia: "Participação em capacitações, incluindo disciplinas isoladas em cursos de graduação e pós-graduação, que desenvolvam competências alinhadas aos objetivos institucionais e/ou que favoreçam a formação continuada no cargo",
        descricao: "Participação em cursos de capacitação, oficinas, seminários, congressos e disciplinas isoladas de graduação ou pós-graduação.",
        unidade_medida: "Por Carga horária (a cada 10 horas)",
        pontuacao_por_unidade: 0.25
    },
    {
        id: 41,
        saber_competencia: "Títulos de educação formal, diferente do requisito de escolaridade e formação especializada exigidos para o ingresso no cargo ocupado pelo servidor",
        descricao: "Título de educação formal, desde que não seja requisito de ingresso do cargo além daquele que o habilita e define o nível de RSC pretendido.",
        unidade_medida: "Por diploma ou certificado (evento)",
        pontuacao_por_unidade: 6.25
    },
    {
        id: 42,
        saber_competencia: "Autoria de obras artísticas e cultural registradas",
        descricao: "Autoria de obras artísticas e cultural registradas",
        unidade_medida: "Por obra artística e cultura",
        pontuacao_por_unidade: 2.5
    },
    {
        id: 43,
        saber_competencia: "Autor de projeto aprovado em edital de pesquisa e/ou extensão.",
        descricao: "Autoria de Projeto de Pesquisa e/ou Extensão aprovado nas instâncias competentes",
        unidade_medida: "Por edital/Projeto",
        pontuacao_por_unidade: 2.5
    },
    {
        id: 44,
        saber_competencia: "Captação de recursos em projetos de desenvolvimento institucional e/ou ensino e/ou pesquisa e/ou extensão e/ou inovação e/ou gestão e/ou assistência",
        descricao: "Elaboração de projeto para a captação de recursos, visando o custeio e investimento em pesquisa e desenvolvimento institucional.",
        unidade_medida: "Por edital/Projeto",
        pontuacao_por_unidade: 2.5
    },
    {
        id: 45,
        saber_competencia: "Carta Patente",
        descricao: "Título de propriedade temporária sobre uma invenção ou modelo de utilidade, outorgado pelo Estado aos inventores ou autores ou outras pessoas físicas ou jurídicas detentoras de direitos sobre a criação",
        unidade_medida: "Por patente",
        pontuacao_por_unidade: 5
    },
    {
        id: 46,
        saber_competencia: "Contratos de transferência de tecnologia e licenciamento.",
        descricao: "Contrato de transferência de tecnologia e de licenciamento para outorga de direito de uso ou de exploração de criação desenvolvida isoladamente por Instituições Científica, Tecnológica e de Inovação (ICTs).",
        unidade_medida: "Por contrato",
        pontuacao_por_unidade: 5
    },
    {
        id: 47,
        saber_competencia: "Coordenação de acordos ou convênios de cooperação",
        descricao: "Atuação na coordenação de acordos ou convênios de cooperação com instituições públicas e privadas para realização de atividades conjuntas de pesquisa científica e tecnológica.",
        unidade_medida: "Por acordo / convênio",
        pontuacao_por_unidade: 2.5
    },
    {
        id: 48,
        saber_competencia: "Coordenação de elaboração de Projetos Pedagógicos de novos Cursos.",
        descricao: "Atuação na articulação, planejamento, execução e avaliação das ações pedagógicas nos projetos pedagógicos de criação de novos cursos",
        unidade_medida: "Por projeto",
        pontuacao_por_unidade: 2.5
    },
    {
        id: 49,
        saber_competencia: "Desenvolvimento de projeto gráfico, diagramação ou identidade visual",
        descricao: "Projeto Gráfico, Diagramação e identidade visual",
        unidade_medida: "Por projeto",
        pontuacao_por_unidade: 1
    },
    {
        id: 50,
        saber_competencia: "Desenvolvimento de software e sistemas digitais",
        descricao: "Processo de criação, design, IA (Inteligência Artificial), modelos de linguagem naturais, bots e afins, implementação e suporte de software e conteúdos digitais",
        unidade_medida: "Por registro",
        pontuacao_por_unidade: 5
    },
    {
        id: 51,
        saber_competencia: "Edição de mídias técnicas veiculadas em jornais, revistas e sites",
        descricao: "Atuação na edição de mídias técnicas veiculadas em jornais, revistas e sites",
        unidade_medida: "Por item",
        pontuacao_por_unidade: 0.1
    },
    {
        id: 52,
        saber_competencia: "Edição de roteiros para programas de rádio, TV e mídias; eventos institucionais (artísticos, culturais e esportivos)",
        descricao: "Atuação no processo de processo de criação e edição de roteiros para uma variedade de plataformas de mídia.",
        unidade_medida: "Por item",
        pontuacao_por_unidade: 0.1
    },
    {
        id: 53,
        saber_competencia: "Edição, organização, revisão, tradução e avaliação/parecer em publicações",
        descricao: "Atuação na edição, organização, revisão, tradução ou avaliação/parecer de publicações, como livros, revistas científicas, periódicos ou relatórios acadêmicos",
        unidade_medida: "Por livro/periódico (evento)",
        pontuacao_por_unidade: 1
    },
    {
        id: 54,
        saber_competencia: "Liderança ou vice-liderança de grupo de pesquisa registrado",
        descricao: "O pesquisador líder de grupo é o personagem que detém a liderança acadêmica e intelectual no seu ambiente de pesquisa.",
        unidade_medida: "Por grupo de pesquisa",
        pontuacao_por_unidade: 2.5
    },
    {
        id: 55,
        saber_competencia: "Atuação de servidor como avaliador em eventos acadêmicos, científicos, culturais, esportivos e técnicos envolvendo a análise crítica, avaliação e emissão de pareceres sobre trabalhos, projetos ou apresentações realizadas",
        descricao: "Participação como avaliador de TCC, TCR, congresso, simpósio, conferência, colóquio, mesa redonda, workshop, seminário, mostra, feira, eventos científicos, técnico, esportivos, sociais, artísticos, culturais e filantrópicos.",
        unidade_medida: "Por evento",
        pontuacao_por_unidade: 1
    },
    {
        id: 56,
        saber_competencia: "Atividade de avaliação do projeto de ensino e/ou pesquisa e/ou extensão e/ou inovação, verificando se o mesmo foi submetido de forma adequada e de acordo com as normas institucionais, bem como avaliação do projeto em si (critérios de relevância, execução, aspectos formais, metodológicos e teóricos)",
        descricao: "Participação como avaliador/parecerista de projetos de ensino e/ou pesquisa e/ou extensão e/ou inovação, na própria instituição ou em outras instituições.",
        unidade_medida: "Por projeto",
        pontuacao_por_unidade: 1
    },
    {
        id: 57,
        saber_competencia: "Participação como coordenador de implantação de unidades de ensino",
        descricao: "Atuação do servidor na função de coordenador no processo de criação e desenvolvimento de novas unidades de ensino vinculadas à Rede Federal",
        unidade_medida: "Por unidade de ensino",
        pontuacao_por_unidade: 2.5
    },
    {
        id: 58,
        saber_competencia: "Participação como coordenador em projetos de desenvolvimento institucional e/ou ensino e/ou pesquisa e/ou extensão e/ou inovação e/ou assistência, na própria instituição ou em parceria com outras instituições",
        descricao: "Atuação do servidor na função de coordenador em projetos de desenvolvimento institucional e/ou ensino e/ou pesquisa e/ou extensão e/ou inovação e/ou assistência.",
        unidade_medida: "Por projeto",
        pontuacao_por_unidade: 2.5
    },
    {
        id: 59,
        saber_competencia: "Participação como mediador, palestrante, apresentador ou artista em congresso, simpósio, conferência, colóquio, mesa redonda, workshop, seminário, debate, oficina, jornada, mostra, feira, minicursos, eventos científicos, técnico, esportivos, sociais, artísticos, culturais, sindicais e filantrópicos.",
        descricao: "Atuação como mediador, palestrante, apresentador ou artista de congresso, simpósio, conferência, colóquio, mesa redonda, workshop, seminário, mostra, feira, minicursos, eventos científicos, técnico, esportivos, sociais, artísticos, culturais e filantrópicos.",
        unidade_medida: "Por evento",
        pontuacao_por_unidade: 1
    },
    {
        id: 60,
        saber_competencia: "Participação como membro de equipe de implantação de unidades de ensino.",
        descricao: "Atuação no processo de criação e desenvolvimento de novas unidades de ensino vinculadas à Rede Federal",
        unidade_medida: "Por unidade de ensino implantada",
        pontuacao_por_unidade: 1
    },
    {
        id: 61,
        saber_competencia: "Participação como ouvinte ou assistente em congresso, simpósio, fórum, conferência, colóquio, mesa redonda, workshop, seminário, mostra, feira, minicursos, eventos científicos, técnico, esportivos, sociais, artísticos, culturais, sindicais e filantrópicos.",
        descricao: "Atuação como ouvinte ou assistente de congresso, simpósio, conferência, colóquio, mesa redonda, workshop, seminário, mostra, feira, minicursos, eventos científicos, técnico, esportivos, sociais, artísticos, culturais e filantrópicos.",
        unidade_medida: "Por evento",
        pontuacao_por_unidade: 0.125
    },
    {
        id: 62,
        saber_competencia: "Participação em comissão de elaboração/reformulação de projetos pedagógicos de cursos técnicos integrados ao ensino médio, técnicos concomitantes ou subsequentes, graduação ou pós-graduação cursos de formação inicial e continuada (FIC)",
        descricao: "Atuação na articulação, planejamento, execução e avaliação das ações nos projetos pedagógicos de cursos técnicos integrados ao ensino médio, técnicos concomitantes ou subsequentes, graduação ou pós-graduação e cursos de formação inicial e continuada (FIC)",
        unidade_medida: "Por projeto",
        pontuacao_por_unidade: 0.5
    },
    {
        id: 63,
        saber_competencia: "Participação em conselhos editoriais",
        descricao: "Atuação como membro de conselhos editoriais de revistas científicas, periódicos ou outras publicações acadêmicas e institucionais.",
        unidade_medida: "Por livro/periódico (evento)",
        pontuacao_por_unidade: 2.5
    },
    {
        id: 64,
        saber_competencia: "Participação em coordenação de elaboração/reformulação de projetos pedagógicos de cursos técnicos integrados ao ensino médio, técnicos concomitantes ou subsequentes, graduação ou pós-graduação",
        descricao: "Atuação na coordenação de projetos pedagógicos de cursos técnicos integrados ao ensino médio, técnicos concomitantes ou subsequentes, graduação ou pós-graduação",
        unidade_medida: "Por projeto",
        pontuacao_por_unidade: 1
    },
    {
        id: 65,
        saber_competencia: "Participação em grupo de pesquisa registrado",
        descricao: "Participação como coordenador ou colaborador em grupo de pesquisa registrado no CNPQ no âmbito da instituição ou de outra instituição",
        unidade_medida: "Por projeto",
        pontuacao_por_unidade: 1
    },
    {
        id: 66,
        saber_competencia: "Participação em projeto de implantação/implementação de ambientes de ensino/aprendizagem, laboratórios, oficinas, estúdios, alas ou áreas para práticas esportivas, sociais, artísticos e culturais.",
        descricao: "Atuação em projeto e implantação/implementação de ambientes de ensino/aprendizagem, laboratórios, oficinas, estúdios, alas ou áreas para práticas esportivas, sociais, artísticos e culturais.",
        unidade_medida: "Por projeto",
        pontuacao_por_unidade: 1
    },
    {
        id: 67,
        saber_competencia: "Participação em projetos de desenvolvimento institucional e/ou ensino e/ou pesquisa e/ou extensão e/ou inovação e/ou assistência, na própria instituição ou em parceria com outras instituições.",
        descricao: "Atuação em projetos de desenvolvimento institucional e/ou ensino e/ou pesquisa e/ou extensão e/ou inovação e/ou assistência, na própria instituição ou em parceria com outras instituições.",
        unidade_medida: "Por projeto",
        pontuacao_por_unidade: 1
    },
    {
        id: 68,
        saber_competencia: "Participação na organização de congresso, simpósio, conferência, colóquio, mesa redonda, workshop, seminário, mostra, feira, minicursos, eventos científicos, técnico, esportivos, sociais, artísticos, culturais, sindicais e filantrópicos.",
        descricao: "Atuação na concepção, planejamento, execução e avaliação de congresso, simpósio, conferência, colóquio, mesa redonda, workshop, seminário, mostra, feira, minicursos, eventos científicos, técnico, esportivos, sociais, artísticos, culturais e filantrópicos.",
        unidade_medida: "Por evento",
        pontuacao_por_unidade: 1.25
    },
    {
        id: 69,
        saber_competencia: "Participação no desenvolvimento de protótipos, depósitos e/ou registros de propriedade intelectual.",
        descricao: "Atuação em processos que visam a criação, proteção e formalização de inovações, invenções, designs ou criações originais",
        unidade_medida: "Por projeto",
        pontuacao_por_unidade: 2.5
    },
    {
        id: 70,
        saber_competencia: "Prêmio de mérito profissional ou acadêmico, comendas, homenagens e menções honrosas",
        descricao: "Honrarias atribuídas em decorrência de destaque em desempenho acadêmico ou profissional com a concessão de medalhas, diplomas, comendas ou homenagens para destacar os atos e/ou atividades reconhecidas como merecedoras de mérito.",
        unidade_medida: "Por prêmio de mérito profissional ou acadêmico, comendas e, homenagens e/ou menção honrosa",
        pontuacao_por_unidade: 3.125
    },
    {
        id: 71,
        saber_competencia: "Produção de material audiovisual",
        descricao: "Criação de comunicações que combinam elementos visuais e sons sincronizados desde a sua concepção até a sua finalização, englobando o conjunto de todas as fases necessárias para a realização de um vídeo ou produto equivalente.",
        unidade_medida: "Por Projeto",
        pontuacao_por_unidade: 1
    },
    {
        id: 72,
        saber_competencia: "Publicação de artigos, trabalho completo e capítulo de livro (com ISBN e Conselho Editorial)",
        descricao: "Atividade de publicação de diversos tipos de produções intelectuais e acadêmicas que contribuem para a disseminação do conhecimento em uma determinada área de atuação.",
        unidade_medida: "Por publicação (evento)",
        pontuacao_por_unidade: 1.5
    },
    {
        id: 73,
        saber_competencia: "Publicação de livro (com ISBN e Conselho Editorial)",
        descricao: "Atividade de publicação de livro. Devem ser acompanhados de um ISBN (International Standard Book Number), que identifica de maneira única a obra, e de um Conselho Editorial.",
        unidade_medida: "Por publicação (evento)",
        pontuacao_por_unidade: 2.5
    },
    {
        id: 74,
        saber_competencia: "Avaliador de curso pelo INEP ou pelo MEC",
        descricao: "Atuar como avaliador nas comissões responsáveis pela avaliação externa in loco dos cursos de graduação e das instituições de educação superior.",
        unidade_medida: "Por avaliação",
        pontuacao_por_unidade: 2.5
    },
    {
        id: 75,
        saber_competencia: "Elaboração, revisão e/ou correção de provas de exame de seleção, vestibular ou concursos",
        descricao: "Elaborar questões de provas em processos seletivos simplificados, vestibular ou equivalente ou em concursos públicos para provimento de cargo efetivo",
        unidade_medida: "Por edital",
        pontuacao_por_unidade: 1
    },
    {
        id: 76,
        saber_competencia: "Participação como jurado na área de atuação",
        descricao: "Participar na condição de jurado em concursos, eventos e similares na sua área de conhecimento/atuação",
        unidade_medida: "Por evento",
        pontuacao_por_unidade: 0.5
    },
    {
        id: 77,
        saber_competencia: "Participação como orientador das monitorias de disciplinas e nas unidades de produção e laboratórios.",
        descricao: "Participar como orientador das monitorias de disciplinas e nas unidades de produção e laboratórios.",
        unidade_medida: "Por orientação",
        pontuacao_por_unidade: 0.5
    },
    {
        id: 78,
        saber_competencia: "Participação como orientador de bolsistas de apoio técnico.",
        descricao: "Participar como orientador de bolsistas de apoio técnico",
        unidade_medida: "Por orientação",
        pontuacao_por_unidade: 0.5
    },
    {
        id: 79,
        saber_competencia: "Participação como orientador/supervisor de estágios supervisionados.",
        descricao: "Participar como orientador/supervisor nos estágios supervisionados",
        unidade_medida: "Por orientação/supervisão",
        pontuacao_por_unidade: 0.5
    },
    {
        id: 80,
        saber_competencia: "Participação como preceptor em residências acadêmicas",
        descricao: "Participar como preceptor nas residências acadêmicas, supervisionando diretamente as atividades práticas feitas pelos residentes.",
        unidade_medida: "Por precepção",
        pontuacao_por_unidade: 1
    },
    {
        id: 81,
        saber_competencia: "Participação no apoio a atividades de preceptoria em residências médica e multiprofissional",
        descricao: "Atuação na orientação de internos e residentes nas condutas do setor e para a utilização dos sistemas eletrônicos dos Hospitais Universitários.",
        unidade_medida: "Por declaração semestral",
        pontuacao_por_unidade: 0.1
    },
    {
        id: 82,
        saber_competencia: "Participação em situações de surtos, epidemias e pandemias",
        descricao: "Atuação em ações de campo, como investigações de surtos, monitoramento de eventos de massa e inquéritos, assim como nas respostas requeridas para prevenir, proteger e controlar a ocorrência ou propagação de casos novos de uma doença ou agravo.",
        unidade_medida: "Tempo (mês)",
        pontuacao_por_unidade: 0.5
    },
    {
        id: 83,
        saber_competencia: "Participação em políticas, programas e ações de promoção da saúde.",
        descricao: "Atuação na formulação, implementação, avaliação e/ou reformulação de planos, estratégias, programas ou projetos de saúde que visem promover a equidade e a melhoria das condições e modos de viver.",
        unidade_medida: "Por programa, plano, projeto e/ou ação.",
        pontuacao_por_unidade: 1.5
    },
    {
        id: 84,
        saber_competencia: "Acolhimento em Saúde Mental, Atendimento em necessidades específicas e Humanização do Atendimento.",
        descricao: "Atuar diretamente com discentes, docentes e técnico-administrativos com objetivo de favorecer processos de aprendizagem, atuar em situações emergenciais de saúde mental de discentes, docentes e técnico-administrativos.",
        unidade_medida: "Atendimento/encaminhamento e/ou participação em programa, plano, projeto e/ou ação de humanização.",
        pontuacao_por_unidade: 0.05
    },
    {
        id: 85,
        saber_competencia: "Atuação em áreas hospitalares críticas e semicríticas",
        descricao: "Atuação do servidor em áreas hospitalares que oferecem maior risco de transmissão de infecções, áreas em que se realizam um grande número de procedimentos invasivos e/ou que possuem pacientes humanos e animais de alto risco.",
        unidade_medida: "Tempo (mês)",
        pontuacao_por_unidade: 0.05
    },
    {
        id: 86,
        saber_competencia: "Atuação em atividades de campo e saídas pedagógicas",
        descricao: "Atuação em atividades de campo e saídas pedagógicas, acompanhando estudantes, em conjunto com o corpo docente em atividades como: apoio à coleta de dados, observação e análise de comunidades, espaços urbanos, edificações ou fenômenos sociais para análise e registro.",
        unidade_medida: "Por atividade de campo ou saída pedagógica",
        pontuacao_por_unidade: 0.25
    },
    {
        id: 87,
        saber_competencia: "Participação em políticas, programas e ações de promoção da inclusão, acessibilidade e da diversidade",
        descricao: "Participação em políticas, programas e ações de promoção da inclusão, de gênero, da diversidade, de questões étnico-raciais, indígenas, pessoas com necessidades específicas e direitos humanos.",
        unidade_medida: "Por programa, plano, projeto e/ou ação.",
        pontuacao_por_unidade: 1.5
    },
    {
        id: 88,
        saber_competencia: "Atuação em atividades de execução / operação, desenvolvimento, colaboração ou treinamento nos sistemas estruturadores do Governo Federal",
        descricao: "Atuação em atividades de execução / operação, desenvolvimento, colaboração ou treinamento nos sistemas estruturadores do Governo Federal nas suas diversas áreas de atuação como planejamento, orçamento, finanças, pessoal, compras, logística e controle, ensino, pesquisa e extensão.",
        unidade_medida: "Tempo (mês)",
        pontuacao_por_unidade: 0.5
    },
    {
        id: 89,
        saber_competencia: "Produção, tradução e interpretação de materiais acessíveis",
        descricao: "Produção de materiais acessíveis ou atuação em tradução/interpretação para acessibilidade em atividades pedagógicos, eventos e cursos.",
        unidade_medida: "Por material produzido, interpretado ou traduzido",
        pontuacao_por_unidade: 1
    }
];

// Estado da aplicação
let appState = {
    nomeCompleto: '',
    nivelSelecionado: 'RSC-1',
    itensPreenchidos: {},
    pontuacaoTotal: 0,
    itensComprovados: 0
};

// Inicialização da aplicação
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    setupTabNavigation();
    setupNivelSelector();
    setupNomeInput();
    setupImprimirButton();
    renderSaberesItems();
    updateCalculations();
    updateCharts();
}

// Navegação entre abas
function setupTabNavigation() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.getAttribute('data-tab');
            
            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button and corresponding content
            button.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
            
            // Update charts when switching to results or analysis tabs
            if (targetTab === 'resultados' || targetTab === 'analise') {
                setTimeout(updateCharts, 100);
            }
        });
    });
}

// Configuração do seletor de nível
function setupNivelSelector() {
    const nivelSelect = document.getElementById('nivelSelect');
    
    nivelSelect.addEventListener('change', (e) => {
        appState.nivelSelecionado = e.target.value;
        updateRequisitosPanel();
        updateCalculations();
    });
    
    updateRequisitosPanel();
}

// Configuração do input de nome
function setupNomeInput() {
    const nomeInput = document.getElementById('nomeCompleto');
    
    nomeInput.addEventListener('input', (e) => {
        appState.nomeCompleto = e.target.value;
    });
}

// Configuração do botão de impressão
function setupImprimirButton() {
    const imprimirBtn = document.getElementById('imprimirBtn');
    
    imprimirBtn.addEventListener('click', () => {
        gerarDemonstrativo();
    });
}

// Atualização do painel de requisitos
function updateRequisitosPanel() {
    const nivel = appState.nivelSelecionado;
    const requisitos = rscLevels[nivel];
    
    document.getElementById('requisitosTitle').textContent = `Requisitos do ${nivel}`;
    document.getElementById('escolaridadeText').textContent = requisitos.escolaridade;
    document.getElementById('pontosMinimos').textContent = requisitos.min_points;
    document.getElementById('itensMinimos').textContent = requisitos.min_items;
    document.getElementById('progressoTitle').textContent = `Progresso para ${nivel}`;
}

// Renderização dos itens de saberes
function renderSaberesItems() {
    const container = document.getElementById('saberesContainer');
    
    container.innerHTML = rscItems.map(item => `
        <div class="saber-item">
            <div class="saber-header">
                <input type="checkbox" class="saber-checkbox" id="checkbox-${item.id}" 
                       onchange="toggleSaber(${item.id}, this.checked)">
                <label for="checkbox-${item.id}" class="saber-title">
                    ${item.id}. ${item.saber_competencia}
                </label>
            </div>
            <div class="saber-details">
                ${item.descricao}
            </div>
            <div class="saber-controls">
                <div class="saber-meta">
                    <strong>Unidade:</strong> ${item.unidade_medida} | 
                    <strong>Pontuação:</strong> ${item.pontuacao_por_unidade} pontos por unidade
                </div>
                <input type="number" class="saber-quantidade" id="quantidade-${item.id}" 
                       min="0" step="1" value="0" placeholder="Quantidade"
                       onchange="updateQuantidade(${item.id}, this.value)">
                <div class="saber-pontos" id="pontos-${item.id}">0.00</div>
            </div>
        </div>
    `).join('');
}

// Toggle de saber
function toggleSaber(id, checked) {
    if (checked) {
        if (!appState.itensPreenchidos[id]) {
            appState.itensPreenchidos[id] = { quantidade: 0, pontos: 0 };
        }
        const quantidadeInput = document.getElementById(`quantidade-${id}`);
        if (quantidadeInput.value === '0') {
            quantidadeInput.value = '1';
            updateQuantidade(id, 1);
        }
    } else {
        delete appState.itensPreenchidos[id];
        document.getElementById(`quantidade-${id}`).value = '0';
        document.getElementById(`pontos-${id}`).textContent = '0.00';
    }
    updateCalculations();
}

// Atualização de quantidade
function updateQuantidade(id, quantidade) {
    const item = rscItems.find(i => i.id === id);
    const qtd = parseFloat(quantidade) || 0;
    const pontos = qtd * item.pontuacao_por_unidade;
    
    if (qtd > 0) {
        appState.itensPreenchidos[id] = { quantidade: qtd, pontos: pontos };
        document.getElementById(`checkbox-${id}`).checked = true;
    } else {
        delete appState.itensPreenchidos[id];
        document.getElementById(`checkbox-${id}`).checked = false;
    }
    
    document.getElementById(`pontos-${id}`).textContent = pontos.toFixed(2);
    updateCalculations();
}

// Atualização dos cálculos
function updateCalculations() {
    // Calcular totais
    appState.pontuacaoTotal = Object.values(appState.itensPreenchidos)
        .reduce((total, item) => total + item.pontos, 0);
    appState.itensComprovados = Object.keys(appState.itensPreenchidos).length;
    
    // Determinar nível alcançado
    const nivelAlcancado = determinarNivelAlcancado();
    
    // Atualizar interface
    updateStatusAtual(nivelAlcancado);
    updateProgresso();
    updateResultados(nivelAlcancado);
    updateStatusNiveis();
}

// Determinar nível alcançado
function determinarNivelAlcancado() {
    const niveis = ['RSC-6', 'RSC-5', 'RSC-4', 'RSC-3', 'RSC-2', 'RSC-1'];
    
    for (const nivel of niveis) {
        const requisitos = rscLevels[nivel];
        if (appState.pontuacaoTotal >= requisitos.min_points && 
            appState.itensComprovados >= requisitos.min_items) {
            return nivel;
        }
    }
    return 'Nenhum';
}

// Atualizar status atual
function updateStatusAtual(nivelAlcancado) {
    document.getElementById('pontuacaoAtual').textContent = appState.pontuacaoTotal.toFixed(2);
    document.getElementById('itensAtual').textContent = appState.itensComprovados;
    document.getElementById('rscAlcancado').textContent = nivelAlcancado;
}

// Atualizar progresso
function updateProgresso() {
    const nivel = appState.nivelSelecionado;
    const requisitos = rscLevels[nivel];
    
    const progressoPontos = Math.min(100, (appState.pontuacaoTotal / requisitos.min_points) * 100);
    const progressoItens = Math.min(100, (appState.itensComprovados / requisitos.min_items) * 100);
    
    document.getElementById('progressoPontos').style.width = `${progressoPontos}%`;
    document.getElementById('progressoItens').style.width = `${progressoItens}%`;
    
    document.getElementById('progressoPontosText').textContent = 
        `${appState.pontuacaoTotal.toFixed(1)}/${requisitos.min_points}`;
    document.getElementById('progressoItensText').textContent = 
        `${appState.itensComprovados}/${requisitos.min_items}`;
    
    // O que falta
    const faltaPontos = Math.max(0, requisitos.min_points - appState.pontuacaoTotal);
    const faltaItens = Math.max(0, requisitos.min_items - appState.itensComprovados);
    
    document.getElementById('faltaPontos').textContent = faltaPontos > 0 ? `+${faltaPontos.toFixed(1)}` : '✓';
    document.getElementById('faltaItens').textContent = faltaItens > 0 ? `+${faltaItens}` : '✓';
}

// Atualizar resultados
function updateResultados(nivelAlcancado) {
    document.getElementById('pontuacaoTotal').textContent = appState.pontuacaoTotal.toFixed(2);
    document.getElementById('itensComprovados').textContent = appState.itensComprovados;
    document.getElementById('nivelAlcancado').textContent = nivelAlcancado;
    
    const progressoGeral = (appState.itensComprovados / 89) * 100;
    document.getElementById('progressoGeral').textContent = `${progressoGeral.toFixed(1)}%`;
}

// Atualizar status por níveis
function updateStatusNiveis() {
    const container = document.getElementById('statusNiveis');
    
    container.innerHTML = Object.keys(rscLevels).map(nivel => {
        const requisitos = rscLevels[nivel];
        const atende = appState.pontuacaoTotal >= requisitos.min_points && 
                      appState.itensComprovados >= requisitos.min_items;
        
        return `
            <div class="nivel-status ${atende ? 'atende' : 'nao-atende'}">
                <div class="nivel-info">
                    <h4>${nivel}</h4>
                    <p>Mínimo: ${requisitos.min_points} pontos e ${requisitos.min_items} itens</p>
                </div>
                <div class="nivel-resultado ${atende ? 'atende' : 'nao-atende'}">
                    <div class="status">${atende ? 'Atende' : 'Não atende'}</div>
                    <div class="detalhes">
                        Pontos: ${appState.pontuacaoTotal.toFixed(1)} | 
                        Itens: ${appState.itensComprovados}
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

// Atualizar gráficos
function updateCharts() {
    updateChartPizza();
    updateChartBarras();
}

// Gráfico de pizza
function updateChartPizza() {
    const canvases = ['chartPizza', 'chartPizzaAnalise'];
    
    canvases.forEach(canvasId => {
        const canvas = document.getElementById(canvasId);
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        
        // Destruir gráfico existente se houver
        if (canvas.chart) {
            canvas.chart.destroy();
        }
        
        // Dados para o gráfico
        const categorias = {};
        Object.keys(appState.itensPreenchidos).forEach(id => {
            const item = rscItems.find(i => i.id == id);
            const categoria = getCategoriaItem(item);
            categorias[categoria] = (categorias[categoria] || 0) + appState.itensPreenchidos[id].pontos;
        });
        
        const labels = Object.keys(categorias);
        const data = Object.values(categorias);
        const colors = generateColors(labels.length);
        
        if (labels.length === 0) {
            labels.push('Nenhum item preenchido');
            data.push(1);
            colors.push('#e5e7eb');
        }
        
        canvas.chart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: labels,
                datasets: [{
                    data: data,
                    backgroundColor: colors,
                    borderWidth: 2,
                    borderColor: '#ffffff'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom'
                    }
                }
            }
        });
    });
}

// Gráfico de barras
function updateChartBarras() {
    const canvases = ['chartBarras', 'chartBarrasAnalise'];
    
    canvases.forEach(canvasId => {
        const canvas = document.getElementById(canvasId);
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        
        // Destruir gráfico existente se houver
        if (canvas.chart) {
            canvas.chart.destroy();
        }
        
        const niveis = Object.keys(rscLevels);
        const pontosMinimos = niveis.map(nivel => rscLevels[nivel].min_points);
        const pontosAtuais = niveis.map(() => appState.pontuacaoTotal);
        
        canvas.chart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: niveis,
                datasets: [
                    {
                        label: 'Pontos Mínimos',
                        data: pontosMinimos,
                        backgroundColor: '#e5e7eb',
                        borderColor: '#9ca3af',
                        borderWidth: 1
                    },
                    {
                        label: 'Pontos Atuais',
                        data: pontosAtuais,
                        backgroundColor: '#22c55e',
                        borderColor: '#16a34a',
                        borderWidth: 1
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                },
                plugins: {
                    legend: {
                        position: 'top'
                    }
                }
            }
        });
    });
}

// Obter categoria do item
function getCategoriaItem(item) {
    const titulo = item.saber_competencia.toLowerCase();
    
    if (titulo.includes('gestão') || titulo.includes('fiscalização') || titulo.includes('contratos')) {
        return 'Gestão e Contratos';
    } else if (titulo.includes('comissão') || titulo.includes('comitê')) {
        return 'Comissões e Comitês';
    } else if (titulo.includes('capacitação') || titulo.includes('curso') || titulo.includes('formação')) {
        return 'Capacitação e Formação';
    } else if (titulo.includes('projeto') || titulo.includes('pesquisa') || titulo.includes('extensão')) {
        return 'Projetos e Pesquisa';
    } else if (titulo.includes('tempo') || titulo.includes('exercício') || titulo.includes('carreira')) {
        return 'Experiência Profissional';
    } else if (titulo.includes('publicação') || titulo.includes('artigo') || titulo.includes('livro')) {
        return 'Publicações';
    } else {
        return 'Outras Atividades';
    }
}

// Gerar cores para gráficos
function generateColors(count) {
    const colors = [
        '#22c55e', '#3b82f6', '#f59e0b', '#ef4444', '#8b5cf6',
        '#06b6d4', '#f97316', '#84cc16', '#ec4899', '#6366f1'
    ];
    
    const result = [];
    for (let i = 0; i < count; i++) {
        result.push(colors[i % colors.length]);
    }
    return result;
}

// Gerar demonstrativo
function gerarDemonstrativo() {
    const itensPreenchidos = Object.keys(appState.itensPreenchidos).map(id => {
        const item = rscItems.find(i => i.id == id);
        const dados = appState.itensPreenchidos[id];
        return {
            item: item,
            quantidade: dados.quantidade,
            pontos: dados.pontos
        };
    });
    
    const nivelAlcancado = determinarNivelAlcancado();
    const dataAtual = new Date().toLocaleDateString('pt-BR');
    
    const demonstrativo = `
        <!DOCTYPE html>
        <html lang="pt-BR">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Demonstrativo RSC-TAE</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    margin: 20px;
                    color: #333;
                    line-height: 1.6;
                }
                .header {
                    text-align: center;
                    margin-bottom: 30px;
                    border-bottom: 2px solid #333;
                    padding-bottom: 20px;
                }
                .info-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 20px;
                    margin-bottom: 30px;
                }
                .info-item {
                    padding: 10px;
                    background: #f8f9fa;
                    border-radius: 5px;
                }
                .items-table {
                    width: 100%;
                    border-collapse: collapse;
                    margin-bottom: 30px;
                }
                .items-table th,
                .items-table td {
                    border: 1px solid #ddd;
                    padding: 8px;
                    text-align: left;
                }
                .items-table th {
                    background-color: #f2f2f2;
                    font-weight: bold;
                }
                .total-section {
                    background: #f0f9ff;
                    padding: 20px;
                    border-radius: 8px;
                    border: 2px solid #0369a1;
                }
                .footer {
                    margin-top: 30px;
                    text-align: center;
                    font-size: 0.9em;
                    color: #666;
                }
                @media print {
                    body { margin: 0; }
                    .header { page-break-after: avoid; }
                }
            </style>
        </head>
        <body>
            <div class="header">
                <h1>Demonstrativo RSC-TAE</h1>
                <h2>Reconhecimento de Saberes e Competências</h2>
                <p>Técnico-Administrativos em Educação</p>
            </div>
            
            <div class="info-grid">
                <div class="info-item">
                    <strong>Servidor:</strong> ${appState.nomeCompleto || 'Não informado'}
                </div>
                <div class="info-item">
                    <strong>Data:</strong> ${dataAtual}
                </div>
                <div class="info-item">
                    <strong>Nível Pretendido:</strong> ${appState.nivelSelecionado}
                </div>
                <div class="info-item">
                    <strong>Nível Alcançado:</strong> ${nivelAlcancado}
                </div>
            </div>
            
            ${itensPreenchidos.length > 0 ? `
                <h3>Itens Comprovados</h3>
                <table class="items-table">
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Descrição</th>
                            <th>Quantidade</th>
                            <th>Pontuação</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${itensPreenchidos.map(item => `
                            <tr>
                                <td>${item.item.id}</td>
                                <td>${item.item.saber_competencia}</td>
                                <td>${item.quantidade}</td>
                                <td>${item.pontos.toFixed(2)}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            ` : '<p>Nenhum item foi preenchido.</p>'}
            
            <div class="total-section">
                <h3>Resumo Final</h3>
                <p><strong>Total de Itens Comprovados:</strong> ${appState.itensComprovados} de 89</p>
                <p><strong>Pontuação Total:</strong> ${appState.pontuacaoTotal.toFixed(2)} pontos</p>
                <p><strong>Nível RSC-TAE Alcançado:</strong> ${nivelAlcancado}</p>
            </div>
            
            <div class="footer">
                <p>Demonstrativo gerado automaticamente pela Calculadora RSC-TAE</p>
                <p>Este documento é apenas informativo e não substitui a avaliação oficial</p>
            </div>
        </body>
        </html>
    `;
    
    // Abrir em nova janela
    const novaJanela = window.open('', '_blank');
    novaJanela.document.write(demonstrativo);
    novaJanela.document.close();
    novaJanela.focus();
}

