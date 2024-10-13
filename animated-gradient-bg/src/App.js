import React, { useEffect } from 'react'

function App() {

  useEffect(() => {
    let curX = 0;
    let curY = 0;

    let tgX = 0;
    let tgY = 0;

    const interBubble = document.querySelector('.interactive-bubble');

    function move() {
      curX += (tgX - curX) / 30;
      curY += (tgY - curY) / 30;

      if (interBubble) {
        interBubble.style.transform = `translate( ${Math.round(curX)}px, ${Math.round(curY)}px )`
      }

      requestAnimationFrame(() => {
        move()
      })
    }

    window.addEventListener('mousemove', (e) => {
      tgX = e.clientX
      tgY = e.clientY
    })

    move()

    return () => {
      window.removeEventListener('mousemove', () => { })
    }
  }, [])

  return (
    <div className="App">
      <div class="gradient-bg">
        <svg xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="goo">
              <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
              <feColorMatrix in="blur" type="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 18 -8"
                result="goo" />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>
        <div class="gradient-container">
          <div class="circle-1"></div>
          <div class="circle-2"></div>
          <div class="circle-3"></div>
          <div class="circle-4"></div>
          <div class="circle-5"></div>
          <div class="interactive-bubble"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
