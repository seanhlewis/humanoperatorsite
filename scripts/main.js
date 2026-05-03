(function () {
    function clamp(value, min, max) {
        return Math.min(max, Math.max(min, value));
    }

    function initIcons() {
        if (window.lucide && typeof window.lucide.createIcons === 'function') {
            window.lucide.createIcons();
        }
    }

    function initHeader() {
        const bar = document.querySelector('[data-header-shell]');

        if (!bar) {
            return;
        }

        let ticking = false;

        function update() {
            bar.dataset.scrolled = window.scrollY > 10 ? 'on' : 'off';
        }

        function scheduleUpdate() {
            if (ticking) {
                return;
            }

            ticking = true;

            window.requestAnimationFrame(function () {
                update();
                ticking = false;
            });
        }

        update();
        window.addEventListener('scroll', scheduleUpdate, { passive: true });
    }

    function initScrolly() {
        const rail = document.querySelector('[data-scroll-rail]');

        if (!rail) {
            return;
        }

        const stage = rail.querySelector('[data-scroll-stage]');
        const track = rail.querySelector('[data-scroll-track]');
        const frame = rail.querySelector('[data-scroll-frame]');

        if (!stage || !track || !frame) {
            return;
        }

        let maxOffset = 0;
        let ticking = false;
        let introHold = 0;
        const scrollFactor = 1.85;

        function isMobile() {
            return window.matchMedia('(max-width: 1023px)').matches;
        }

        function reset() {
            rail.style.height = '';
            track.style.transform = 'translate3d(0, 0, 0)';
            frame.dataset.leftFade = 'off';
            frame.dataset.rightFade = 'off';
        }

        function scheduleUpdate() {
            if (ticking) {
                return;
            }

            ticking = true;

            window.requestAnimationFrame(function () {
                update();
                ticking = false;
            });
        }

        function measure() {
            if (isMobile()) {
                reset();
                return;
            }

            maxOffset = Math.max(track.scrollWidth - frame.clientWidth, 0);
            introHold = Math.round(window.innerHeight * 0.22);
            rail.style.height = `${window.innerHeight + introHold + maxOffset * scrollFactor}px`;
            scheduleUpdate();
        }

        function update() {
            if (isMobile()) {
                reset();
                return;
            }

            const start = rail.offsetTop;
            const current = clamp((window.scrollY - start - introHold) / scrollFactor, 0, maxOffset);

            track.style.transform = `translate3d(-${current}px, 0, 0)`;
            frame.dataset.leftFade = current > 2 ? 'on' : 'off';
            frame.dataset.rightFade = current < maxOffset - 2 ? 'on' : 'off';
        }

        if (document.fonts && document.fonts.ready) {
            document.fonts.ready.then(measure).catch(function () {
                measure();
            });
        }

        window.addEventListener('load', measure);
        window.addEventListener('resize', measure);
        window.addEventListener('scroll', scheduleUpdate, { passive: true });

        track.querySelectorAll('video').forEach(function (video) {
            video.addEventListener('loadedmetadata', measure, { once: true });
        });

        measure();
    }

    document.addEventListener('DOMContentLoaded', function () {
        initIcons();
        initHeader();
        initScrolly();
    });
})();
