export function FormatVideoDate(publishedDate: string){
    const hoje = new Date()
    const videoDate = new Date (publishedDate)
    const msPorDia = 24 * 60 * 60 * 1000 // Quantidade de milisseconds em 1 dia

    //Função para ajudar na formatação
    function singularOrPlural(difference: number, target: number){
        let stringResult

        if(difference === 1){
            const singular = ['dia','mês', 'ano']
            stringResult = singular[target]
                 
        } else {
            const plural =['dias', 'meses', 'anos']
            stringResult = plural[target]
        }
        return stringResult
    }

    //Inicia calculando a diferença de dias da data atual para a data de publicação
    let differenceDays = Math.floor((hoje.getTime() - videoDate.getTime()) / msPorDia) // Resultado em dias

    //Apenas inicializa as variáveis para calcular meses e anos, caso dias sejam > 30 e 365
    let differenceMonths
    let differenceYears

    //Variável para armazenar string de formatação da data de publicação
    let formatPublishedDate;

    if(differenceDays == 0){
        formatPublishedDate = 'Publicado hoje'
    } else if(differenceDays < 30){ //Menos de 1 MÊS de publicação
        //Exibe formatação de dia (Usando função singularOrPlural)
        formatPublishedDate = `há ${differenceDays} ${singularOrPlural(differenceDays, 0)}`    
    } else if(differenceDays < 365){ //Menos de 1 ANO de publicação
      //Calcula Meses
        differenceMonths =  Math.floor(differenceDays/30)
        //Recalcula dias (abatendo os dias referente aos meses)
        differenceDays = (differenceDays - (differenceMonths * 30))
        //Exibe resultado
        differenceDays > 0? //Se tiver dia restante maior que 0, vai ser exibido
            formatPublishedDate = `há ${differenceMonths} ${singularOrPlural(differenceMonths, 1)} e ${differenceDays} ${singularOrPlural(differenceDays, 0)}`
        :
            formatPublishedDate = `há ${differenceMonths} ${singularOrPlural(differenceMonths, 1)}`
      } else{ //Casos em que tenha 1 ano ou mais de publicado
        //Calcula ANOS
        differenceYears = Math.floor(differenceDays/365)
        //Calcula Meses Totais
        differenceMonths = Math.floor(differenceDays/30)
        //Recalcula Meses abatendo os meses de anos completos)
        differenceMonths = (differenceMonths - (differenceYears * 12))
        //Exibe formatação de ano e mês
        differenceMonths > 0?  //Caso tenha meses faltantes, ele vai mostrar os meses restantes também na formatação da data
        formatPublishedDate = 
        `há ${differenceYears} ${singularOrPlural(differenceYears, 2)} e ${differenceMonths} ${singularOrPlural(differenceMonths, 1)}`
        :
        formatPublishedDate = `há ${singularOrPlural(differenceYears, 2)}`
      }
    return formatPublishedDate
}

export function FormatVideoViews(videoViews: string){
    const views = Number(videoViews)
   
    let viewFormat;
    let numberOfViews;
    
    if(views < 1000){
        viewFormat = views
    } else if( views < 1000000){
        numberOfViews = Math.trunc(views/1000)
        viewFormat = `${numberOfViews} mil`
    } else{
        numberOfViews = Number((views/1000000).toFixed(1))
        numberOfViews = numberOfViews.toLocaleString('pt-Br')
        viewFormat = `${numberOfViews} mi de`
    }

    return viewFormat
}