import React from "react"
import Layout from "../components/layout"
import Form from "../components/form"

import "../style/index.scss"

const Home = () => (

  <Layout>
      <div class="home-logo" />

    <div class="home-header" />
    <div class="quote-line" />

    <div class="home-quote">
        <blockquote> "Man shall not live by bread alone, but by every word that comes from the mouth of God."</blockquote>
        <p class="quote-verse">- Matthew 4:4</p>
      </div>  
    <Form />


    <div class="body-image">
      <svg width="611" height="412" viewBox="0 0 611 412" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0)">
          <path d="M99.2598 191.851C108.204 191.851 115.455 184.301 115.455 174.988C115.455 165.675 108.204 158.125 99.2598 158.125C90.3154 158.125 83.0646 165.675 83.0646 174.988C83.0646 184.301 90.3154 191.851 99.2598 191.851Z" fill="#FFB8B8"/>
          <path d="M44.5368 377.062L48.6375 384.316L77.4605 371.299L71.408 360.593L44.5368 377.062Z" fill="#FFB8B8"/>
          <path d="M45.7656 373.818L53.8413 388.103L53.8416 388.104C54.5174 389.299 54.9605 390.622 55.1455 391.996C55.3304 393.37 55.2537 394.768 54.9197 396.111C54.5856 397.454 54.0008 398.715 53.1986 399.823C52.3964 400.93 51.3926 401.863 50.2443 402.566L49.9602 402.74L36.7379 379.351L45.7656 373.818Z" fill="#2F2E41"/>
          <path d="M92.0501 403.195L100.134 403.194L103.98 370.728L92.0488 370.728L92.0501 403.195Z" fill="#FFB8B8"/>
          <path d="M89.9882 400.447L105.908 400.446H105.909C107.241 400.446 108.561 400.719 109.791 401.25C111.022 401.781 112.141 402.559 113.083 403.54C114.025 404.521 114.772 405.685 115.282 406.967C115.792 408.249 116.055 409.622 116.055 411.01V411.353L89.9887 411.354L89.9882 400.447Z" fill="#2F2E41"/>
          <path d="M59.55 383.524C59.0847 383.525 58.626 383.411 58.2108 383.192C57.7957 382.974 57.4358 382.656 57.1604 382.266L49.364 371.241C49.1261 370.904 48.9563 370.521 48.8646 370.115C48.7729 369.708 48.7614 369.286 48.8307 368.875C48.9 368.463 49.0487 368.071 49.2678 367.721C49.4869 367.371 49.7719 367.071 50.1055 366.839L84.7983 342.712L63.8651 285.401L108.63 289.248L110.138 338.498C110.279 342.983 109.247 347.424 107.151 351.345C105.055 355.266 101.975 358.52 98.2392 360.759L61.0325 383.109C60.582 383.381 60.0706 383.524 59.55 383.524Z" fill="#2F2E41"/>
          <path d="M92.2942 396.603C91.5264 396.602 90.7891 396.291 90.2372 395.735C89.6853 395.179 89.3616 394.423 89.3343 393.624L87.6938 345.645L108.008 344.531L106.391 392.854C106.367 393.62 106.07 394.349 105.558 394.899C105.046 395.449 104.356 395.78 103.622 395.829L92.4959 396.597C92.4284 396.601 92.3611 396.603 92.2942 396.603Z" fill="#2F2E41"/>
          <path d="M113.811 298.775C108.642 298.775 90.5897 292.722 84.3225 290.565C83.3849 291.346 78.2342 295.356 72.222 294.623C68.5123 294.17 65.2465 291.983 62.5153 288.124C56.4839 279.601 63.9334 243.05 71.2449 213.888C72.7106 207.993 76.3141 202.92 81.2978 199.735C86.2815 196.549 92.2572 195.499 97.9688 196.806C102.108 197.758 105.911 199.892 108.95 202.97C111.989 206.048 114.143 209.948 115.171 214.23C116.547 220.064 115.363 226.927 114.498 231.939C114.092 234.295 113.771 236.157 113.88 237.071C114.305 240.606 116.662 296.042 115.146 298.409C114.985 298.661 114.518 298.775 113.811 298.775Z" fill="#6C63FF"/>
          <path d="M94.9031 298.873C95.7338 298.23 96.4188 297.404 96.9098 296.455C97.4009 295.505 97.686 294.455 97.7452 293.379C97.8044 292.302 97.6362 291.225 97.2524 290.224C96.8687 289.222 96.2786 288.321 95.524 287.582L95.844 220.406L80.6487 223.041L85.1122 288.244C84.0049 289.647 83.4301 291.423 83.4967 293.237C83.5633 295.051 84.2666 296.777 85.4735 298.087C86.6803 299.397 88.3068 300.201 90.0448 300.346C91.7827 300.491 93.5114 299.967 94.9031 298.873Z" fill="#FFB8B8"/>
          <path d="M98.4176 263.547H82.0505C81.2689 263.545 80.5196 263.222 79.9644 262.649C79.4092 262.077 79.0927 261.299 79.0833 260.486L78.6815 214.285C78.6675 212.687 78.958 211.103 79.5359 209.623C80.1138 208.143 80.9678 206.797 82.0485 205.663C83.1292 204.529 84.415 203.629 85.8318 203.016C87.2485 202.403 88.768 202.088 90.3023 202.09C91.8366 202.092 93.3553 202.41 94.7706 203.027C96.1859 203.644 97.4697 204.547 98.5477 205.684C99.6257 206.821 100.477 208.169 101.051 209.65C101.625 211.132 101.912 212.717 101.894 214.315L101.385 260.493C101.373 261.305 101.056 262.08 100.501 262.652C99.9459 263.223 99.1979 263.544 98.4176 263.547Z" fill="#6C63FF"/>
          <path d="M95.1361 191.78C87.7211 191.794 80.7258 185.692 79.4408 178.088C78.9808 175.101 79.1882 172.043 80.047 169.153C80.9794 165.863 82.5784 162.819 84.7362 160.227C86.8941 157.635 89.5606 155.554 92.556 154.126C95.5514 152.697 98.8061 151.954 102.101 151.947C105.395 151.939 108.653 152.667 111.655 154.081C113.638 155.016 115.592 156.358 116.501 158.418C117.409 160.479 116.84 163.358 114.853 164.285C113.555 164.891 111.926 164.594 110.774 165.463C109.119 166.712 109.545 169.371 110.284 171.355C111.023 173.339 111.858 175.74 110.62 177.433C109.466 179.01 107.159 178.961 105.342 178.367C103.525 177.774 101.731 176.779 99.8369 176.982C97.0738 177.277 95.0882 180.138 94.7207 183.005C94.3532 185.872 95.2183 188.737 96.0725 191.489L95.1361 191.78Z" fill="#2F2E41"/>
          <path d="M170.781 412H0.659384C0.484505 412 0.316787 411.928 0.193129 411.799C0.0694702 411.67 0 411.495 0 411.313C0 411.131 0.0694702 410.957 0.193129 410.828C0.316787 410.699 0.484505 410.627 0.659384 410.627H170.781C170.955 410.627 171.123 410.699 171.247 410.828C171.371 410.957 171.44 411.131 171.44 411.313C171.44 411.495 171.371 411.67 171.247 411.799C171.123 411.928 170.955 412 170.781 412Z" fill="#CCCCCC"/>
          <path d="M600.12 298.347H177.561C174.677 298.344 171.911 297.149 169.872 295.026C167.832 292.902 166.685 290.022 166.681 287.019V15.7183C166.684 13.518 167.524 11.4084 169.018 9.85252C170.513 8.2966 172.539 7.42136 174.652 7.41882H602.891C605.041 7.42137 607.102 8.31172 608.622 9.89454C610.143 11.4774 610.998 13.6234 611 15.8618V287.019C610.997 290.022 609.849 292.902 607.81 295.026C605.77 297.149 603.005 298.344 600.12 298.347Z" fill="#F2F2F2"/>
          <path d="M586.458 284.044H192.644C186.871 284.044 182.174 279.465 182.174 273.836V37.5844C182.174 33.41 185.655 30.0137 189.933 30.0137H589.041C593.389 30.0137 596.927 33.466 596.927 37.7091V273.836C596.927 279.465 592.231 284.044 586.458 284.044Z" fill="white"/>
          <path d="M610.849 17.13H166.529V11.3626C166.533 8.34916 167.685 5.46051 169.732 3.33036C171.779 1.2002 174.554 0.00249868 177.448 0H599.929C602.823 0.00247327 605.598 1.20017 607.645 3.33033C609.692 5.46049 610.844 8.34915 610.849 11.3626V17.13Z" fill="#3F3D56"/>
          <path d="M186.373 11.523C187.933 11.523 189.197 10.2063 189.197 8.58213C189.197 6.95794 187.933 5.64127 186.373 5.64127C184.813 5.64127 183.549 6.95794 183.549 8.58213C183.549 10.2063 184.813 11.523 186.373 11.523Z" fill="white"/>
          <path d="M197.094 11.523C198.654 11.523 199.918 10.2063 199.918 8.58213C199.918 6.95794 198.654 5.64127 197.094 5.64127C195.534 5.64127 194.269 6.95794 194.269 8.58213C194.269 10.2063 195.534 11.523 197.094 11.523Z" fill="white"/>
          <path d="M207.815 11.523C209.375 11.523 210.639 10.2063 210.639 8.58213C210.639 6.95794 209.375 5.64127 207.815 5.64127C206.255 5.64127 204.99 6.95794 204.99 8.58213C204.99 10.2063 206.255 11.523 207.815 11.523Z" fill="white"/>
          <path d="M380.208 81.6705H303.187C302.038 81.6705 300.937 81.1956 300.125 80.3501C299.313 79.5047 298.857 78.358 298.857 77.1624C298.857 75.9668 299.313 74.8201 300.125 73.9747C300.937 73.1293 302.038 72.6543 303.187 72.6543H380.208C381.356 72.6543 382.458 73.1293 383.27 73.9747C384.081 74.8201 384.538 75.9668 384.538 77.1624C384.538 78.358 384.081 79.5047 383.27 80.3501C382.458 81.1956 381.356 81.6705 380.208 81.6705Z" fill="#CCCCCC"/>
          <path d="M475.915 81.6705H398.894C397.745 81.6705 396.644 81.1956 395.832 80.3501C395.02 79.5047 394.564 78.358 394.564 77.1624C394.564 75.9668 395.02 74.8201 395.832 73.9747C396.644 73.1293 397.745 72.6543 398.894 72.6543H475.915C477.063 72.6543 478.165 73.1293 478.977 73.9747C479.789 74.8201 480.245 75.9668 480.245 77.1624C480.245 78.358 479.789 79.5047 478.977 80.3501C478.165 81.1956 477.063 81.6705 475.915 81.6705Z" fill="#CCCCCC"/>
          <path d="M475.915 98.7539H341.925C340.777 98.7539 339.676 98.2789 338.864 97.4335C338.052 96.588 337.596 95.4414 337.596 94.2458C337.596 93.0501 338.052 91.9035 338.864 91.0581C339.676 90.2126 340.777 89.7377 341.925 89.7377H475.915C477.063 89.7377 478.165 90.2126 478.977 91.0581C479.789 91.9035 480.245 93.0501 480.245 94.2458C480.245 95.4414 479.789 96.588 478.977 97.4335C478.165 98.2789 477.063 98.7539 475.915 98.7539Z" fill="#CCCCCC"/>
          <path d="M380.208 64.3499H303.187C302.039 64.3484 300.939 63.8728 300.129 63.0275C299.318 62.1822 298.862 61.0364 298.862 59.8418C298.862 58.6471 299.318 57.5013 300.129 56.656C300.939 55.8107 302.039 55.3351 303.187 55.3337H380.208C380.777 55.3329 381.341 55.449 381.867 55.6752C382.392 55.9014 382.87 56.2334 383.273 56.6521C383.676 57.0708 383.995 57.568 384.213 58.1153C384.431 58.6626 384.543 59.2493 384.543 59.8418C384.543 60.4342 384.431 61.0209 384.213 61.5682C383.995 62.1155 383.676 62.6127 383.273 63.0314C382.87 63.4501 382.392 63.7821 381.867 64.0083C381.341 64.2345 380.777 64.3506 380.208 64.3499Z" fill="#CCCCCC"/>
          <path d="M422.593 64.5871H400.717C399.568 64.5871 398.467 64.1122 397.655 63.2667C396.843 62.4213 396.387 61.2747 396.387 60.079C396.387 58.8834 396.843 57.7367 397.655 56.8913C398.467 56.0459 399.568 55.5709 400.717 55.5709H422.593C423.741 55.5709 424.842 56.0459 425.654 56.8913C426.466 57.7367 426.922 58.8834 426.922 60.079C426.922 61.2747 426.466 62.4213 425.654 63.2667C424.842 64.1122 423.741 64.5871 422.593 64.5871Z" fill="#CCCCCC"/>
          <path d="M325.062 98.7539H303.187C302.039 98.7524 300.939 98.2768 300.129 97.4315C299.318 96.5863 298.862 95.4404 298.862 94.2458C298.862 93.0511 299.318 91.9053 300.129 91.06C300.939 90.2147 302.039 89.7391 303.187 89.7377H325.062C325.632 89.7369 326.195 89.853 326.721 90.0792C327.247 90.3055 327.725 90.6374 328.127 91.0561C328.53 91.4748 328.849 91.972 329.067 92.5193C329.285 93.0666 329.397 93.6533 329.397 94.2458C329.397 94.8383 329.285 95.4249 329.067 95.9722C328.849 96.5195 328.53 97.0168 328.127 97.4354C327.725 97.8541 327.247 98.1861 326.721 98.4123C326.195 98.6385 325.632 98.7546 325.062 98.7539Z" fill="#CCCCCC"/>
          <path d="M380.208 241.641H303.187C302.038 241.641 300.937 241.166 300.125 240.321C299.313 239.475 298.857 238.329 298.857 237.133C298.857 235.937 299.313 234.791 300.125 233.945C300.937 233.1 302.038 232.625 303.187 232.625H380.208C380.777 232.625 381.34 232.742 381.865 232.968C382.39 233.195 382.867 233.527 383.27 233.945C383.672 234.364 383.99 234.861 384.208 235.408C384.426 235.955 384.538 236.541 384.538 237.133C384.538 237.725 384.426 238.311 384.208 238.858C383.99 239.405 383.672 239.902 383.27 240.321C382.867 240.739 382.39 241.072 381.865 241.298C381.34 241.525 380.777 241.641 380.208 241.641Z" fill="#CCCCCC"/>
          <path d="M475.915 241.641H398.894C397.745 241.641 396.644 241.166 395.832 240.321C395.02 239.475 394.564 238.329 394.564 237.133C394.564 235.937 395.02 234.791 395.832 233.945C396.644 233.1 397.745 232.625 398.894 232.625H475.915C476.484 232.625 477.047 232.742 477.572 232.968C478.097 233.195 478.575 233.527 478.977 233.945C479.379 234.364 479.698 234.861 479.915 235.408C480.133 235.955 480.245 236.541 480.245 237.133C480.245 237.725 480.133 238.311 479.915 238.858C479.698 239.405 479.379 239.902 478.977 240.321C478.575 240.739 478.097 241.072 477.572 241.298C477.047 241.525 476.484 241.641 475.915 241.641Z" fill="#CCCCCC"/>
          <path d="M475.915 258.725H341.925C340.777 258.725 339.676 258.25 338.864 257.404C338.052 256.559 337.596 255.412 337.596 254.216C337.596 253.021 338.052 251.874 338.864 251.029C339.676 250.183 340.777 249.708 341.925 249.708H475.915C476.484 249.708 477.048 249.824 477.574 250.05C478.1 250.276 478.578 250.608 478.98 251.027C479.383 251.445 479.702 251.943 479.92 252.49C480.138 253.037 480.25 253.624 480.25 254.216C480.25 254.809 480.138 255.396 479.92 255.943C479.702 256.49 479.383 256.987 478.98 257.406C478.578 257.825 478.1 258.157 477.574 258.383C477.048 258.609 476.484 258.725 475.915 258.725Z" fill="#CCCCCC"/>
          <path d="M380.208 224.321H303.187C302.038 224.321 300.937 223.846 300.125 223C299.313 222.155 298.857 221.008 298.857 219.812C298.857 218.617 299.313 217.47 300.125 216.625C300.937 215.779 302.038 215.304 303.187 215.304H380.208C381.356 215.304 382.458 215.779 383.27 216.625C384.081 217.47 384.538 218.617 384.538 219.812C384.538 221.008 384.081 222.155 383.27 223C382.458 223.846 381.356 224.321 380.208 224.321Z" fill="#CCCCCC"/>
          <path d="M422.593 224.558H400.717C399.568 224.558 398.467 224.083 397.655 223.237C396.843 222.392 396.387 221.245 396.387 220.05C396.387 218.854 396.843 217.707 397.655 216.862C398.467 216.017 399.568 215.542 400.717 215.542H422.593C423.741 215.542 424.842 216.017 425.654 216.862C426.466 217.707 426.922 218.854 426.922 220.05C426.922 221.245 426.466 222.392 425.654 223.237C424.842 224.083 423.741 224.558 422.593 224.558Z" fill="#CCCCCC"/>
          <path d="M325.062 258.725H303.187C302.038 258.725 300.937 258.25 300.125 257.404C299.313 256.559 298.857 255.412 298.857 254.216C298.857 253.021 299.313 251.874 300.125 251.029C300.937 250.183 302.038 249.708 303.187 249.708H325.062C325.632 249.708 326.195 249.824 326.721 250.05C327.247 250.276 327.725 250.608 328.127 251.027C328.53 251.445 328.849 251.943 329.067 252.49C329.285 253.037 329.397 253.624 329.397 254.216C329.397 254.809 329.285 255.396 329.067 255.943C328.849 256.49 328.53 256.987 328.127 257.406C327.725 257.825 327.247 258.157 326.721 258.383C326.195 258.609 325.632 258.725 325.062 258.725Z" fill="#CCCCCC"/>
          <path d="M360.092 193.243C358.458 193.247 356.888 192.578 355.725 191.382L326.772 161.613C326.204 161.029 325.753 160.333 325.445 159.565C325.137 158.798 324.978 157.974 324.978 157.142C324.978 156.311 325.137 155.487 325.445 154.72C325.753 153.952 326.204 153.256 326.772 152.672L355.608 123.023C356.809 121.793 358.428 121.107 360.112 121.113C361.796 121.118 363.41 121.815 364.604 123.052C365.799 124.299 366.47 125.989 366.47 127.751C366.47 129.512 365.799 131.202 364.604 132.449L343.177 154.76C342.509 155.457 342.135 156.401 342.135 157.385C342.135 158.369 342.509 159.313 343.177 160.01L364.488 182.2C365.358 183.105 365.951 184.257 366.192 185.513C366.432 186.769 366.309 188.07 365.838 189.253C365.367 190.435 364.57 191.446 363.547 192.156C362.524 192.867 361.322 193.245 360.092 193.243V193.243Z" fill="#6C63FF"/>
          <path d="M406.227 193.243C404.997 193.245 403.795 192.867 402.772 192.156C401.749 191.446 400.952 190.435 400.481 189.253C400.01 188.07 399.887 186.768 400.127 185.513C400.368 184.257 400.961 183.104 401.831 182.2L423.142 160.01C423.81 159.313 424.184 158.369 424.184 157.385C424.184 156.401 423.81 155.457 423.142 154.76L401.715 132.449C401.122 131.832 400.652 131.1 400.331 130.293C400.011 129.487 399.846 128.623 399.846 127.751C399.846 126.878 400.011 126.014 400.331 125.208C400.652 124.402 401.122 123.669 401.715 123.052C402.909 121.815 404.523 121.118 406.207 121.113C407.891 121.107 409.51 121.793 410.711 123.023L439.547 152.672C440.115 153.256 440.566 153.952 440.874 154.72C441.182 155.487 441.341 156.311 441.341 157.142C441.341 157.974 441.182 158.798 440.874 159.565C440.566 160.333 440.115 161.029 439.547 161.613L410.594 191.382C409.431 192.578 407.861 193.247 406.227 193.243Z" fill="#6C63FF"/>
          </g>
        <defs>
        <clipPath id="clip0">
        <rect width="611" height="412" fill="white"/>
        </clipPath>
        </defs>
      </svg>

    </div>

  </Layout>
  
  
)

export default Home
