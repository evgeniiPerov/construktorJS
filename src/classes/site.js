export class Site {
    constructor(selector) {
        this.$el = document.querySelector(selector)
    }
    render(model) {
        this.$el.innerHTML = ''
        model.forEach((block) => {
            //posining from mdn, use beforeend
            this.$el.insertAdjacentHTML('beforeend', block.toHTML())
        
        })
    }
}