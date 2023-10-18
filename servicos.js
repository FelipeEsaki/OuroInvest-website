const servicos = [
    {
        imagem: `//img.icons8.com/color/96/money-bag.png`,
        servico: 'Crédito Consignado',
        texto: `O empréstimo consignado é muito conhecido dos <strong>aposentados</strong>, <strong>pensionistas</strong> e <strong>funcionários públicos</strong>, pois
        tem as parcelas descontadas diretamente da folha de pagamento ou do benefício. Aqui também temos o <strong>saque FGTS</strong>.`
    },
    {
        imagem: `//img.icons8.com/color/96/get-cash.png`,
        servico: 'Crédito Pessoal',
        texto: `Crédito pessoal é destinado a <strong>todos o públicos</strong>! Aqui na OuroInvest temos também a modalidade de <strong>crédito com desconto na conta de energia</strong>, <strong>crédito via artão de crédito</strong> e muito mais!.`
    },
    {
        imagem: `//img.icons8.com/color/96/bullish.png`,
        servico: 'Consultoria Financeira Empresarial',
        texto: `A consultoria financeira empresarial é o que sua empresa precisa para <strong>atingir o sucesso financeiro</strong>. Oferecemos soluções para <strong>otimizar seus recursos, melhorar a rentabilidade</strong> e tomar decisões financeiras sólidas.`
    },
    {
        imagem: `//img.icons8.com/fluency/96/investment.png`,
        servico: 'Consultoria de investimentos',
        texto: `Conte com profissionais <strong>certificados pela CVM</strong> para te orientar sobre os <strong>melhores investimentos</strong> do momento e criar a sua <strong>carteira de investimentos</strong> da melhor forma possível.`
    },
    {
        imagem: `//img.icons8.com/color-glass/96/pay-date.png`,
        servico: 'Planejamento financeiro',
        texto: `Transforme seus <strong>sonhos em realidade</strong> com nosso planejamento financeiro personalizado. <strong>Economize, invista e alcance suas metas.</strong> Consulte-nos e inicie sua jornada rumo à segurança financeira.`
    },
    {
        imagem: `//img.icons8.com/fluency/100/security-checked--v1.png`,
        servico: 'Seguros',
        texto: `A OuroInvest possui <strong>todos os tipos de seguros</strong> e <strong>mais de 10 seguradoras</strong> parceiras para melhor atender sua necessidade. Seguros residenciais, veiculares, seguro de vida e muito mais!`
    },
    {
        imagem: `//img.icons8.com/bubbles/100/check.png`,
        servico: 'Consórcios',
        texto: `A OuroInvest oferece a <strong>melhor opção de consórcio</strong> de acordo com sua necessidade, seja para adquirir um novo veículo, casa, custear cirurgias e muito mais!`
    },
    {
        imagem: `//img.icons8.com/stickers/100/cash.png`,
        servico: 'Capital de Giro',
        texto: `O capital de giro é um produto para <strong>atender as necessidades de caixa da sua empresa</strong> e <strong>custear o ciclo operacional</strong> para te ajudar a honrar com seus compromissos. A OuroInvest possui os <strong>melhores parceiros</strong> com as <strong>melhores taxas</strong> do mercado!`
    },
    {
        imagem: `//img.icons8.com/clouds/100/cottage.png`,
        servico: 'Home Equity',
        texto: `Está na hora de <strong>adquirir sua nova casa!</strong> Com a OuroInvest você tem as <strong>melhores taxas</strong> e opções de financiamento e refinanciamento residencial!`
    },
];

for (const servico of servicos) {
    const content = `<div class="servico">
    <img width="96" height="96" src="https:${servico.imagem}" alt="get-cash--v1"/>
    <h2>${servico.servico}</h2>
    <p>${servico.texto} </p>
</div>`

    document.querySelector('.servicos').innerHTML += content;
}