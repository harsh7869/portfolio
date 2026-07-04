let isFirstVisible = true;
        function toggleImage() {
            const img1 = document.getElementById('onlight');
            const img2 = document.getElementById('offlight');
            if (isFirstVisible) {
                img1.classList.add('hidden');
                img2.classList.remove('hidden');
            } else {
                img1.classList.remove('hidden');
                img2.classList.add('hidden');
            }
            isFirstVisible = !isFirstVisible;
        }



        function toggleImage() {
            document.body.classList.toggle("dark-mode");
        
            let onLight = document.getElementById("onlight");
            let offLight = document.getElementById("offlight");
        
            if (document.body.classList.contains("dark-mode")) {
                onLight.classList.add("hidden");
                offLight.classList.remove("hidden");
            } else {
                onLight.classList.remove("hidden");
                offLight.classList.add("hidden");
            }
        }

         
    
//    window.onload = function() {
//   // Check if intro shown before
//   if (!localStorage.getItem('introShown')) {
//     const intro = document.getElementById('introMessage');
//     const closeBtn = document.getElementById('closeIntro');
    
//     // Show intro message
//     intro.style.display = 'block';
    
//     // When user clicks close, hide intro and save flag
//     closeBtn.onclick = function() {
//       intro.style.display = 'none';
//       localStorage.setItem('introShown', 'true');
//     };

//     // Or auto-hide after 7 seconds (optional)
//     setTimeout(() => {
//       intro.style.display = 'none';
//       localStorage.setItem('introShown', 'true');
//     }, 7000);
//   }
// }
