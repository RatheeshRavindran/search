{
  search: [
    {
      type:'article',
      query:'https://sites.google.com/site/sites/system/app/pages/meta/search?scope=all&q={{term}}',
      translate:'parseHTML(response)',
      name:{
        selector:'.sites-search-result h3 a',
        expression:'element.textContent'
      },
      link:{
        selector:'.sites-search-result h3 a',
        expression:'"https://sites.google.com/" + element.getAttribute("href")'
      },
      description:{
        selector:'.sites-search-result h3 span > span',
        expression:'element.textContent'
      }
    }
  ]
}
