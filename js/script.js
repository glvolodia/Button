 var data = [
      {
        name: 'Menu Header 1',
        subitems: [
          {
            name: 'Menu subitem 1-1',
            subitems: []
          },
          {
            name: 'Menu subitem 1-2',
            subitems:[
              {
                name: 'Menu subitem 1-2-1',
                subitems: []
              }
            ]
          }
        ]
      },
      {
        name: 'Menu Header 2',
        subitems: [
          {
            name: 'Menu subitem 2-1',
            subitems: []
          }
        ]
      },
      {
        name: 'Menu Header 2',
        subitems: []  
      }
    ];

      function createTree(container, obj) {
        container.innerHTML = createTreeText(obj);
      }
      
      function createTreeText(obj) {
        var li = '';
        
        for(var i = 0; i < obj.length; i++){
          if(obj[i].subitems){
            li += '<li>' + obj[i].name + createTreeText(obj[i].subitems) + '</li>';
          } else {
            li += '<li>' + obj[i].name + '</li>';
          }
        }  
           
        if (li) {
          var ul = '<ul>' + li + '</ul>'
        }
        return ul || '';
      }
      
      var container = document.getElementById('container');
      
