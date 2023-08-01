document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
  
    function showTabContent(target) {
      tabContents.forEach(content => content.classList.remove('active'));
      document.getElementById(target).classList.add('active');
  
      // タブの中身が切り替わった後にMacy.jsを初期化
      const tabContent = document.getElementById(target);
      const macyContainers = tabContent.querySelectorAll('#macy, #macyweb');
      macyContainers.forEach(macyContainer => {
        Macy({
          container: macyContainer,
          trueOrder: false,
          waitForImages: false,
          useOwnImageLoader: false,
          margin: {
            x: 4,
            y: 4
          },
          columns: 4,
          breakAt: {
            1200: { columns: 4 },
            940: { columns: 3 },
            740: { columns: 2 }
          }
        });
      });
    }
  
    tabButtons.forEach(button => {
      button.addEventListener('click', function() {
        const target = this.getAttribute('data-tab');
        tabButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        showTabContent(target);
      });
    });
  
    // 最初に表示するタブのボタンにactiveクラスを付与して表示させる
    const initialTabButton = document.querySelector('.tab-button');
    initialTabButton.classList.add('active');
    const initialTabContent = initialTabButton.getAttribute('data-tab');
    showTabContent(initialTabContent);
  });


  