import './hello-world-button.css';

export class HelloWorldButton {

    render() {
        const button = document.createElement('button');
        button.innerHTML = 'Hello World';
        button.classList.add('hello-world-button');
        button.onclick = this.onButtonClick;

        return button;
    }

    onButtonClick() {
        alert('Hello World Button has been clicked');
    }

}
