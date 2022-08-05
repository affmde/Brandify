import coin from '../media/images/coin.png'
export const createParticles = (e) => {
    for(let i= 0; i<30; i++){
        createParticle(e.clientX, e.clientY)
    }
}

const createParticle = (x, y)=> {
    const particle= document.createElement('img');
    particle.classList.add('particle')
    particle.src=coin;
    document.body.appendChild(particle);

    //particle.style.background = `hsl(${Math.random() * 90 + 180}, 70%, 60%)`;
    const destinationX = x + (Math.random() - 0.5) * 2 * 75;
    const destinationY = 0

    const animation= particle.animate([
        {
        transform: `translate(${x - (40 / 2)}px, ${y - (40 / 2)}px)`,
        opacity: 1
        },
        {
        transform: `translate(${destinationX}px, ${destinationY}px)`,
        opacity: 0
        }
    ],{
        duration: 1500,
        easing: 'linear',
        // Delay every particle with a random value from 0ms to 200ms
        delay: Math.random() * 200
    }
    )

    animation.onfinish = () => {
        particle.remove();
        };
}



