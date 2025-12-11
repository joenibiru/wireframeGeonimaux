 function showPopup(id) {
            document.getElementById('popup-' + id).classList.add('active');
        }

        function hidePopup(id) {
            document.getElementById('popup-' + id).classList.remove('active');
        }

        // Filter buttons
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                this.classList.add('active');
            });
        });