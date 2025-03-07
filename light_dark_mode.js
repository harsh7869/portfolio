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
