describe('$.fn', function () {
    describe('isElement method', function () {
        it('should return true if the jQuery-object is an element', function () {
            // Arrange.
            setFixtures('\
                <div class="product__name"></div>\
            ');

            // Act & Assert.
            expect($('.product__name').isElement()).toEqual(true);
        });

        it('should return false if the jQuery-object is not an element', function () {
            // Arrange.
            setFixtures('\
                <div class="product"></div>\
            ');

            // Act & Assert.
            expect($('.product').isElement()).toEqual(false);
        });

        it('should return false if the jQuery-object does not have a CSS class', function () {
            // Arrange.
            setFixtures('\
                <div id="product"></div>\
            ');

            // Act & Assert.
            expect($('#product').isElement()).toEqual(false);
        });
    });
});