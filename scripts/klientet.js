document.addEventListener('DOMContentLoaded', function () {
    var boxes = document.querySelectorAll('.container .box');

    boxes.forEach(function (box) {
        box.addEventListener('mouseenter', function () {
            if (this.classList.contains('animating') || this.classList.contains('returning')) return;

            this.classList.add('animating');
            this.querySelector('.body').style.transform = 'rotateY(180deg)';
        });

        box.addEventListener('mouseleave', function () {
            if (this.classList.contains('animating') && !this.classList.contains('returning')) {
                this.classList.add('returning');
                setTimeout(() => {
                    this.querySelector('.body').style.transform = 'rotateY(0deg)';
                    this.classList.remove('animating');
                    setTimeout(() => {
                        this.classList.remove('returning');
                    }, 0);
                }, 600);
            }
        });
    });
});
