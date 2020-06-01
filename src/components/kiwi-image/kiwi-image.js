import Kiwi from './kiwi.jpg';

export class KiwiImage {

    render() {
        const img = document.createElement('img');
        img.alt = 'Kiwi';
        img.src = Kiwi;

        return img;
    }

}