        let cartCount = 0;

        function switchTab(tabName) {
            // Hide all tabs
            document.querySelectorAll('.tab-content').forEach(tab => {
                tab.classList.remove('active');
            });
            document.querySelectorAll('.tab').forEach(tab => {
                tab.classList.remove('active');
            });

            // Show selected tab
            document.getElementById(tabName + '-tab').classList.add('active');
            event.target.classList.add('active');
        }

        function addToCart(productName, price) {
            cartCount++;
            document.getElementById('cart-count').textContent = cartCount;
            alert('✓ ' + productName + ' ajouté au panier !');
        }