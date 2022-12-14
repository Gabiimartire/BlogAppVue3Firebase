<script setup>  
import Comment from './icons/CommentB.vue';
import Favourite from './icons/FavouriteB.vue';
import Share from './icons/ShareB.vue';

</script>

<template>

    <div class="d-flex align-items-center justify-content-center">
      <h2 class="border-bottom text-center text-white pb-2">
        Bienvenidos a <span class="span1">BlogApp</span>
      </h2>
    </div>
    <div class="justify-content-center m-auto" style="width: 20rem">
      <p class="text-white fs-4 text-center p-presentacion border-bottom pb-3">
        <span class="span1">BlogApp</span> permite que los grupos de amigos, familiares y
        compañeros de trabajo se comuniquen y estén en contacto a través de mensajes rápidos
        y frecuentes. Las personas publican lo que piensan, que pueden contener fotos,
        videos, enlaces y texto.
      </p>
    </div>
    <div class="d-flex justify-content-center">
      <h3 class="text-white fw- fs-5 text-center border-bottom pb-2">
        Post con mas favoritos
      </h3>
    </div>

    <!-- post -->
    <div class="postBlogApp mx-4">
      <div class="nAiUser d-flex pt-2 px-3">
        <img
          class="imagenPerfil"
          src="https://elcomercio.pe/resizer/pfVziOV4X8Vu9nwknDc-oNItlB8=/1200x900/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/6Y2EDIISGFGVFANEVDCR5LCG34.jpg"
          alt=""
        />
        <h3 class="nUsuario text-white fw-normal fs-5">Goku LeGana</h3>
      </div>
      <p class="post text-light p-2">
        Alguien tiene el video donde me transformo en ssj3? Se lo quiero mostrar a vegeta
      </p>
      <div class="botones-interaccion my-3">
        <Favourite class="botones" />
        <Comment class="botones"/>
        <Share class="botones"/>
      </div>
    </div>
    <!-- post -->
    <div class="postBlogApp mx-4">
      <div class="nAiUser d-flex pt-2 px-3">
        <img
          class="imagenPerfil"
          src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFBcUFRUYFxcZGhwaGxoZGRgcGhogIh0cIRwaGhkaICwjIBwoHRwbJDUkKC0vMjIyHCI4PTgxPCwxMi8BCwsLDw4PHRERHTEoIykxMTE8MTIxMTEzMTExMTEyMjEvMzExMTExMTM0MjEzMTExMTExMTExMTExMTExMzExMf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAABQQGAgMHAQj/xABEEAACAAMEBgcEBwYGAwEAAAABAgADEQQSITEFBkFRYXETIjKBkaGxQlLB0QcUI2JygpIzc6Ky4fAkNENTwvEVJWMW/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAECBAMFBv/EADARAAICAQMDAQcDBAMAAAAAAAABAhEDEiExBEFRgQUTImFxsfAyocEzkeHxI0PR/9oADAMBAAIRAxEAPwDs0EEEAEEEEAEEEEAEEEeQB7BHkEAewRAtulpEo3Zk1EalbpIvU33RjTjEF9a7GP8AVrySa38qGAHkKdO6dk2RA85qXjRVGLMdwG4bScBUbxCPTOv9llS26MtMm06qFJiiu9iyiij/AKik6vz5dqnzJlrfpZ5rdRq3Kb02UFcF2UJ3x1x4nN/I5zmoqy6WP6QrO1OllzZIahUstVINQGwxpgdmwxZtH6UkzxWTNSZvusCRzGY744tpbR5lu0gZANNs53rh0sk794B284QJOKlXU3WXEMD1lrtVhiByjvPp0uGRDJqVn0vHkcK0Zr3bZNB0nSqM1mdY04N2vEmLfoz6UpTUE+SyH3pZvL4Gh9YzyxSR0s6PBCjRWsdktP7GejtSt2t1wOMtqMPCG8cyQggggAggggAggggAggggAggggAggggAggggDyImkbdLkS2mzWCooqSfQDaTujba54RHc5IpY9wrHBdP6fnWt+kmGg9hB2UG4Dad5gBrrFrxaLQ9JbNJlDJUNGPF2GNeAwHGFEm2T5oJmzppljFg0xyDTZSsL7NZ2mMFHMncIsGjrKjC+4uypdQMe2wzPEA+J5R0xwcpUjnmyxxxb/H8kbLDbbVLa/LtEyWpApL7QAp7rGgyyEWQa52oKF+zLe8UNedA1ISvpGzqCVoTsqMO8mKrb7Y0xya0GwDDvMdsyxQjUd2Z+nyZcrblFpfPuWCdOZ2LuxZmNSxzJ3mIFttyS1BqGY9kA58eQhK1aVxp3xp0qlJi3RS7JrnSlWGXE1pSOEI6pUa5Okb6N1mY1f2uIJwpwBp5RqafdN4EgoagjMcRxiJOmEUqTXod+R2RGdzjn2PlG5Ktkck7LbaNYels5eYCJkl1ZStDU7K7rwqDz4Qgm2wM7FRdGarwOzurGiS/2M0e9cHkYhK/Z8P78Y7ZX+l+UVglG0hmH3cx8o9V93MfKFquQK1PVPrGYnEVG41jhxudBgj5eI4bxFi0PrpbJGCzmdfdm9ceJ63DOKms/PxGMblf590Q4p8g73qdrdLtqFSBLnL2pdcx7yVzHpFpj5osFseVMWZLYrMXssNh2V3gjAjcY75qvp5LZIWauDZOtcVYZjltEZcuPS9uC63Q8gggjkSEEEEAEEEEAEEEEAEEEEAEEEEAVX6Rbd0Vgm07Uy7KH5zRqcQl490cTl5R0b6XLaS9nswyF6c3E4omHIzPKOfIMMNnmP+4lEMk2GaBeQ4Xva2jDfGdt0izqssYS0AAAwrTbSIMESm1aRSUVJptccGDgUjOTKri2WwDNvkOMAoSQcwK0OApvJMQ5loaZghupkX2twQbBxhXctbJz2xHvStoAICjAGuRO8gxC04T0swbAstfNqRtsMgKyquV4c88STtjG0y78y0E0wmIKcFz9YvhWqdIrllphv5X3FlqYBptKbFFO6uPdGt61fIUljjXFYxZ6qeL5cMfnBNJ+1OXZFM9o290a273KJUb8RLTbeavcAYwlyuqMNvyjfaJdBJX/AOd482r8os+rOrEy1IWRkqhxQsQ1MOsNlNndGtJN77JKvsTFJq2VCbINGNDmPWMCpq3Iegjodu1NnSwb0smu1esPKK3bdDkM1FIwyOfgcYtLplJaoNP6ep10WrTsQDZXcfjGSbOIMSXsxBXDYfjEeWuK98cfdSTp/nBRqjbLnED8voYtGpeshsloVzS49FmKNqnaPvKcR3jbFTRcBxDDyjJDhUbgfAxzlj1R3IjKmfVUtwwDA1BFQRtByMZwm1QP+Cs/7pfSHMea9nR1PYIIIgBBBBABBBBABBBBABBBC3T2kRZ7NNntlLls1N5pgBxJoIA4vrlpXprdNmKcEYS1I3Jgf4r0L7UuKzEpdbFuB2gDidvCF0tiRebtNVjzJqfMxLlSxdvM6oMscztwESiDARskoxNVzGP91jDppIzmE8kPxjbJ0lIlmoMzHDFe+BFEW3L0hq9TTDdUe6QNnCPFFMBlDc2dJ4V5Z7W3Yd9eIhFaLO8p1JcsrMyEEADD2l3DZEFido9azUHGNNRctLNl0sw0/DgPOkT9Ay6zl4Eev9IW2dv/AF01sauQK4e1MFfIGNXSfqb8JmbqX8MV5aQkQVVF4k/34RhSqmmLPMAHgTlzIjYcDQnsphzpl5xJ0ZKvTLMlK9e8eIrX0WO+m9iW6Ru0uR9YdQKBERKcgB84uWoVv6KYjDI9V+TfKgMUW3Tbzzn9+aceRJ+IhxoOddcqcMBgeAjbgSlJxfDtf3OmCqUZeKO5aYnOiK8tqAHHAEUOWyF1smOQDOsiTF94AHCmdCDHuhrZ9YsZBNXQXT3dk949DG+06ReXZZboRU9U1FcgR6iMii4PRStOvH7mjHFKCjSbTavjZ8HOdYNHSmmFpEsol0dRq1U062f95whnaFdUSYUIQllDbCRmOcdPmadSZ1Z9nVxvWoYctvnGdrl2S0y0kI/Q9GSUV60JIOZY45nGseh71xUVODru+dickKq0/ucbSxnq9/pHn1Q3R+E+sdCteq8ySVLoGQGpZTVSMyCRiK0pXjD3/wABZLWpaUvQTKYqOzl7mVOK0iuR4lFNceVulxycnjS37efBZ9Tf8jZv3S+kO4gaGsplSJctqVRQpplhuifHz8/1OiXyewQQRBAQQQQAQQQQAQQQQARQPphtpSwrLBoZ05EO+6oaYf4kUd8X+ORfTDaC1pssrYqM/eWA/wCAggUWe10CmYoBCC0aR6xqLxGFYa6TY3VCtdJYCvM0+cJ9O2ESJ7yg1+7SrEbSATF5NXRSJgdJH3R4xbmforGrIgWZNlqJszEvRmY3UPsKVCggZ7cYoRjomtyiXLRBgECJ+iUPQxQubdWhSzyqfePizRrt9gV3vBjgxYCnVFa4eZiRo5bkiWNolKO8gV8yY9WAIuh5lwTnp2Jcxu9ZbnMZY0xiA600ZLXIvNXMbBU1rDKxAiz2w7pM0VJoMbq+NCYi6TYCyWNTtW+RnkGx8aCN3RRty+hk6l/FD6/ZFcc4TKbSFHca/AQ00J1ZzuRhIkOxrsNAo76tC6UhPRrvJY7ufgDDCSaWS0TK4zpqSwKZhQWJruxXwjWotbjJuhdLlG7LGd4lvEgY+ET7NOpMdvvU8TGCSz0iivYXwoKx4ifZhtrTO/AY+bR3xRcZX4JT3s6XqVpK5MCMaK4umu/Z8u+LCFv2SYntS5hB4Y/1Mc4sMwh91I6JqxOM0TkalZi3ssL20x063FofvV8v2/wbMU7V+KNVi0C01S4ZRiRQ8OMQtJaFmyxeZeqFNWXrAYcPWLPotrqHgwJGyhwaJspOjN1esWbAVNFWuJ8PhGJ9ZkhN914NUnKMmUfROlZkkqFYsmZQ4g8tx5RZ5khPrEm4ArN1zTDACuWyvxivPKEy1XUACs1AFFAF2kD8NTDCdphEa0TrwLS6SpaVzOVRwqM9ymOnUK3qiqbW/rsrOeV07XNP1+pd5eQjONNlHUWuJuivhG6PEM57BBBABBBBABBBBABBBBABHB/pGtomaTepoJYWWoOZYCppwxz5R3iOD/TZq6ZU9Lagok43XO6YASP1KCfymJTohlbMvpLTZ5e+YM8sMYR6xT79qnNvmHyw+Eb9HaYC2iVOmA/Zgnq5k0IB9IX3S1ZhGBY15k1hJ2yIqkbtB2fpLTJl7GmLWu6tTnwrFt1vDTXVJYLs7PdAqS15qLTu8op9noHUjePlFrsNrVsDeqEEqYVNGVPbVDnfc0BOxRxiEWHKS1Y3TapS3QFKopmYgY1fAVB2CuWcMDqvaMxOlsKVF6WVJriDg2RHCImjX0ZdMubJmreW4kyhmdGTgpovWNDTAAk7oa6m21ys2yzGDPJOFDUXQaGh2gHwqMovGKumUnJ6bQptdgeVYLaWFDcCknBSTMW8F3imUVrS2NygzkykHhUx0bW6S0zR1rVKEqA5HBSGancCe6Od2es9ZbotQg69CCUurS8Vzu4Z0pG/2eo63Fs4Zn+mXbchMKdI1eyAgpxNDnwBje+K2eVsWrsOLmpP6QBGHRfZg41ZyfL+pjaABMc4UVTTaCaADzMez7mzk2akA+1buGO8/IRKSzlmkyxtF7HZeJJ8gI0BB0agUqzk13ACgx5kwwsyDpXKmgRDSnAAesTDHuRKVE2TnXfSOiao2iQgBJbpW6tKGgGynPCOd3CFT+/7yh3oqec9uFOG6OnWYfewcbNPTtP4X3OkykCznU0usK0OANTkO+DSUxlll2FHIKgjKhxr4YRo0jMvy0nLgaA8q/EGFVst0yawHvMKLsrkB6x4EMTk1J9ufQ9KNySk/o/QhWVuil2i07VXo5Z++1BUcs/GKc0wtMVBmWlqOFWA+MXPWdpYkmzowvyTfYH269u6drCtaboquqtm6W3yRTqiYXPAIC2PeAO+PSxy/wCKeV/iS2Ms53O/J21RQARlHkex84QEEEEAEEEEAEEEEAEEEEAEVL6Tei/8XaelFRcFzf0lR0ZH56d1Ytsca+nHTlWlWJTgv20znQhAe4sfDdAHIOjpyhkssBQuYERZKXmApXGJ9xtx8IA9s8kFxgN/hE7RcxWExlFPtD8KGIZa5LmOcMKDmYw1amdteRHpFo8lZcD+QtXl/vE/mENXtMyXpOdMlkKwZgQRVWUqLykCmeB5iFtkWsyUP/on8wiY7BrdaWGV9/UCJnyRHgt2jdMS3mTFe7LM2hVGNUPVAdVcgYbg1O+KNrVqjNskw2myX+jBrRa35ddlMylOe4xttqNMmXVoxC9g4E7SE2Fqezt2Qw0NrRNlUVyZssYUbtrwVju3HlEwdr5lZJortg0zJnuotNJLjKao6jHProMq5VyFcaQ1TV2f0bsbgLsKUYEMMW6pHGlK7tkS9P6oybYhtFhKiZiWl9kOdoIr1Hz+6d8VHQ2sE+xuZbqWRWo0qZWqnbdr2T5R6XT+0MmP4Z7ryZMuCWm8D38P+PBYG0eUeWjqwKAVXD8VcN8ZS1UI7ACpYAb9pOPhDu3WtLTJFrlghaXesKMA3Vp3EHbTOFd3qy1oRUljxqQAR3LH0OCayQUq/OTLCcpxuWzuvVcmyelKD3VX0qfMw31csBmNcDBSQSK4gkbMMoVSyCHPGgHMk+giwaqvdmodxHn/ANxy6ltY5Vykb+l71yi46OlEynkNmpIH9OFfWIkuWJKGew6wBCKd+8w1nAJMD5BsG+cQLfMVg8yYKy0GC5Xj/wBx87CTb+T/ACvU3+8bi5Lh0/Xujmum7Qb4JNcSxJ2nP4Rbvov0GVU2tj21ZEXhUXmPElRThXfFF03M6x4LTxjs+qdm6OxyFpQ9GpPMivxjd7SyOGJQXf7GeO8mxrMFR3j1EbIII8E6BBBBABBBBABBBBABBGDsACSaAY1OQij60a9mTMNmskkzp+RJDXFJyooxfMZEDHOALlarSktS7sFUBiSSBgoJJx3AEx8taw6Va1WmbaG/1HJA3Lko7lp31i+6+Wy0ypLTLS5E61KstJZP7GWMZ1FU0W+Qi7cL+OMcwgD0HdhyjCbaX99vExnG2cnUPAQBBaYxzYnmSYY6Aek0DeCIWRnLdkIYYHMQToirLslq6OYjAVKMGociQa0MP0dEcWpE6SVMzBAvITiynYGBxGw98c/smlK4PQfe2d8P9F6SaQxIHSS3wmSz2WHDc24xLdhKiy6Z0LfBnyDeBF4qKgn7ybj93MQnr05wos+lBXszh7pOSzRsPtZHHOxaFJR16Nr8ibUrXtKaE0O5thG2EdqkgTXQjI1G/PeO6IJINmtTynEyWxR1O7EEYFWHlSGGv9jlz7IluChZwZEmUrR1IYAhcsGA8eURLOoYMDUm9Wu2u+sMdKIZmjZ653Ot4MjelTFm2yFFIy1bS9ogDezfwsTn+bLhHjVDnCvRpTA5UFNvExs+jU9JZDLJwWY/MAqrbcNh84jsxuzG95rvHefhH1HsyV4VH832/g8X/tnH5/cykjBF95iT5Ad2BhtomaA5Iwo2HccPSFbGj4jsJTwHzMbbHMChccWJPIVoPjGzKtSrybOmlpmjrkxA6cwCDFU1qtwAEpD1VzxzP9Ikpp9UsaPUXzVF5jCvhSKPpW3XicdnmY8Xo+mam5S4Tf8Ac0QtRab2T2X8iK2uZkwL7zgeg+MfQ9nl3UVfdAHgKR8/at2czbbZ0B/1EYnOlGDHyEfQ0ZPaOTVNHSHB7BBBHnFwggggAggggAggggDl/wBLs20p0RWYRZ2wKAUF8Y9c5kEbMsIdan6wKTJsk1QJwkqwbCpwqEOGDCVdbPEV3Q81osCTrM6zJbTQtJgRKXnKdYICfeoV5MY+f7Tb7UtoLsZkq0TXOLIyMC9Va6HGV1io3CgGQgA+kDT3122zJimstD0cumRVfaH4jU8qRWYk6QsbSZpltSooQRkQRgRwiNE1WwM5a1Mb5oqpHCMZK0HOPZxop5RBIulJeIETbVKqtRmPSNdhTAt3RLgEKYcaHtBIKHGmI+UKZgoSOJiboY/aH8J+ECC+arz6FlqaBkfzofIxM08l20n7yg/34Qo1df7SYvvSnpzAvD0h/rQvWlTN4+I+cAJJIo7DkYd2CV0lntUra0pqfob4CEpFJineCIsOrC3mmrvT1JX4wAm+iWYLlqr7NwjmwYD0MS7XIuzAlc3LcMTgachCv6NJlxrXI2m4a/gZlPiXB7oe6dui0PsuoAtNpujbzJMfReyW9NfJ/t/s8PNt1ckvC+wtZzdmN7zXfiaDwj1yLxFadGgHEnb5kx4pACCuFSxHf8gI1TJlVb3nevdn6mPWntwdoWmZfWWwFd54CIc5iRzMbrRdq5XBQQo47K+Ve+I1pa6p4CneYyZJbbmmMmyzfRZZb9saZTBFYjvoBh3x2aOc/RJY7suZMI7VFBpuxPqI6NHzfWO8teDXHg9gggjMWCCCCACCCCACCCCANU2YFUsxCqoJJOAAGJJO6kfM2tOs0y1W1rSGN1X+yByVB2cPvdo7ceAjrP0xawCRZPqqn7S0VU0zEsdo9+C95jgsAPtMWxLWkropTmdLQ9KQKi4MsczT0hAoJIUZk0EMdB6XezTFmKLy16yHIihBI3NQnHjDBJKTZs6fIlssodahp1a9qlNgqMsgY6P4lfcqvhddiO+j6KCDwFdtM/OF9pU3SMjl5xZgoqa4qief/cI9KijqNuFfMxzL2Rpa3QF3RlAYKxBIutQ65/vZEnQ/7T8pjTbR1gd4iToZKux3L6xJUturYraUGwhx/CYsesA/wsknb8Fir6De7Plnn6U+MXHScgzLClPYIOWypBryBrFoq7KydNFZnt2DxHnFo1M/bv8Au/8AkIq1pwCAbxFk1UeloNTQGWw8wREIsxDqrZzL0xaEyH2p24i8GHOHWnwCxY9p2WhI2AG9Q82AhLrDaWs2lHnywLxXC8DdYMtGI8CMNsZztaJUwoZktk6MHIhlNTU1yO6PV9ndTDE6k6/P/TzM/Tzef3kVaqiboewLOnrLaoW5McnLBBv5kQ2mapA0MuaDTYw+IMa9TEvLarYKhCnRSga4re67/rJH5abImS0xAGZIA9IjqfaWX3rcHt+2xrx4lp3W4mmaqWmoAVWqdjfOK/pSzMjmUe30hU81JBx3VrjHSdGzGWcAxPVJvCtcjjFQ1msZS3TiwoA7EV23uth4mL4OsnmbUq4ss8SirR1HU6xGVZkU4Ei8RtFcv4aRYIiaPHUXZ1Ew/LEyPJyScpNvudggggioCCCCACCCCACCCCAPl/XnTv122zZymsutyX+BcAe81b80V+NiSmZqKK+g5mPZ8q4btQSM6ZA7uMAEiUXag5ngIsmrelRZJtybRpbA407BNMRtoaUIhfo+TdSpzbE8tgjVa0qqtkS3kcvhFlJxakiJRUlTLEZRmCY0qWbjPWgxuoP67IrWlGrNHP4f1h/q1p7oJiy537MVAYCt2oOYGJHnCrWSbIa1FpDVQipwIAbGt2uJBzi8opx1p7+Cqb1aa9SNZB9on4hDy0WVGFSo9rZ97f3wlsP7RYsLZEcX/mEckXZT9LSrrAVrT44xN0JL6hO84n0jTpwdb9PpEKx2xpZqMRtByMXx6dXxcEO62LlZU6NlmYtTEgZ04COj6EUCQrK6zEYmjKarxQ1yYbVIFI5ro22pMWimjAYqcx8xDTRmlZlke/KNQxBeW2MuZTDrLsantDHAZ5Ra1GTrgpKOqNFo0rq8kzrS6I2d32Sfh3Qpks9mmAzZbC9VFGx2OShstkPLHrfYpmEwtZH3MC8s8mQGnfSHNu1el22zsiWhSCQ0uZLNbrDFWqDzFOMJaXuisXOLp8Fc0vq8bSqLPmKjBjdMpAboWhmEsxqZYwFaYsRFYs2pE02l5c00lSzS+P8AUGwJtGGdcouwmW2WRLtVjBY3V6aXOHROFrQXaFgSesVpUnHk2lWF6Fn6u1mc3FH6saRWKtlpSaRqs9nCyJstBRUlgKo2AEfCNWrlk6ScCcl6x+EYTtYbDZ1YvaUmFlKlJI6WgO1iuApniRCnROtUkA9Da0RjSomqZddwDOKHdnDLF9hibS3LHabNctjVwVsfGlaRXtYNX5k7Sc2ai3lTonetQKXVGXtdUHKHa2uZNmJMe6aYVShB7wSItNoUtSbKILDZ7w908Y5K4o0JpkmQcTTIhSKZUiREZHqVahF4UocCMziO4+USYsUZ7BBBAgIIIIAIIIIAIIIIA+VrZOEsXEFCa93HnECxSb745DE/LvjVPckliakkw5sUi4n3jiflADzQeh5dsd5DTWlzGQtKAugTSvbl1IwN3Ed+4xIOrEoGjvNJXChKihH5eEVpJzdMjISrSzeVhmCMajvjpa2xbZZ/rqCjqejtCAYK4pR1+6wIPeONLxp7FXaKy2rUkmtZmAzL4UG80hfJtUuSWlywk2WDelu60dakllbDrDcYuaS6DGmOdcorWsNpsKy2lMRezAlAF1YZEmoFOBMaXhcYXaRTXbohTdGy3X61KIQYhkNALw7Vw89kbWNQab39RFQstqK0VqsgYNcq10nbgMiRtEX+yWqy2pAsukiYFPUOVOByYeY2iOEYatlz9y0paef9FJ04PQesKVlEmgFTu84e6dl02hgMKriM8wdoiNoJlFoUnEGoHAkH+o74iEbkovyS3SshSplCrKSrDIjMQ+smnAwuz5eJymywKji0vJhvpQwltdm6OY6bjhy2eUaxEtNOmRs90W6ZZmZb8tlmyvfl1NPxqeshxGBER5DlGvS2KMdqEqT4cor1mtMyW4eWxVhtBIPfvEOP/wBMxp0kiSzZlqMpbZjcIi0VBv4tiHqXzLHK1jtaigtEz8zBu8FgSDjC21WhphrMdnO2+7NX9RjCRrRJHasKH8Mw/wDIGHFi1ysQoGsxl8QquPI1y4R6WPL08ODhN5PBXbc9AFy2xDLA7RHQjrjo8jrP3GSxI/hiHP1k0U2JQMd4kt8hGfPGOSWrUhDJJKnFlMs7suKOy/hJHpFv0RrvbbOQHbplGYcdfucbedYgT9PaLJJWyzSdhUIg5jr590QX0tZmIuJPzAN8y6YneuIHdGWUEu6ZphO+zR27V7WBbUsu91GZekukjEBqDEcRlSLNHzDP06Zk5nmKJdFWWipW7LC1A47TVuMO7PrBapYFyfNAGXXJz4GscaLN7n0JBHF7J9I9sQgOUemFJksg95WhrDqxfSn/AL0gc5b4/pcD+aFA6dBCrQemZVql9LKJpWjK1AyHcwBPkSDshrEAIIwZwBUkAbzhGgaQlf7sv9a/OAJUEaPrUv8A3E/UPnBAHydZZV6aBsXrHu2Q7J2wt0On7Rzvp84Z2mzuJbTCpC0AqcMyAKb84Ag2M4s/AmJ2g9OTbGS0oK3SqyOjglGBIukgHMGtDxO+I0iyt9XmzcLoYLniakDLvjXLXryxuWvxgtieQ0jbZjlukmM3CpC8rowpHuruqtqtrUkS+rtmN1UG/rbTwFYs2oFg0fOnuba4DqR0ctyFlPxY+0wPs1pTfHbpUkIiiWFCeyEpd7qR0XxPdnOctPCOfaM1Ls+jZfSu3TWk9VGZaIhIxMtDXECvWPllCGRoqWs2ZfkCb0hvS3RiqS8qiamVM8QTXHDHC1a16VQTGZ3uy5Yug72rjQbScu6KlP0qZouoCks7T2n5gdkcM41aYQgtXPJxTlJim2aVZSzvLlNdqhlgC7QHJWpkRkcYS2qbZy8uZZpbpdIeZfPUWnsrx74maQX7N+RhDKnMoIUihzBAIPMGM9tuztSqiRpC1pNmCYoK5A120yOHpGmfK9tcVJz2V3Rb7Dq/KmyZc5At4rUqRhe20pljvqIRzZ6TWVWrLlpmKYlsiMMss47TxyvVLuUjOL2XYTQFAYtaWqQcAyUGFCAPWI1v6I0RRLvv7VMEHvGm3YBximgtZWjK3GMCrRalWyy/dJ30vGIVstwaqy0VFyJui83yEPdIajTY9HS1QTZz1BFRLGZ5mIc0KSSECg5AbI2XY1iLaEthZrux6MK8ozjBxFXFUSTdKSaEONooecS9Ez7yFT2k8xsPd8o3zkDC6cqUhPJJlTQTkDQ8Qc/KKRSexaR0PRVqE1CswKzrnUDrDY3PfGydoeS9aygOK1B8sITaNfo5l/MZU3g7fjD+0oJi/ZzGDLjVCKjmpwI4GFeSlNCkifYX6eyzGCilQcRhsdfaTE8RXviwSvpfevWsVQKA3Z3XGGJumXQgnLEQmlWqajATXWZKNReC0rzPDccc4T6d0OUJmycQua7RvXipGKmIcUX+o813+keXbLG1nlyZ0p2ZDVrl2impxBrXAbIoMufLmYTAqOf9QAXW4TF2fiHeNsTJM1XWo7wdnCFtss1w4dk5cOEI1wGu41/8e+5P1p84IVXRBFtJFlv1e0EFlo8zEnrBdmOIvfKJGth/wxG908jWGFlt6TCVGDjNTn3bxCjXJ/spY2l/QRRqkFyRJyXdGLhi7qedXPwEJg9JhO4U8odaTmobJZlU4Fh/CDUeMV5zUk8TFSyN02wHoFmkijsVu7cNo843aF1otlkIMme4UGtxjeRuBQ7OVIm6cl9HZrOnMnnQfOK0I6ThpdfQpCWpX9R62lJtqnGZOYE4kKouolfdX4mph5YEqoAzBI84qWjHpMA34RctEtQlSKXheXjTA0/vZEO3ySe2ywUQlcSKk8R/SKhpGx3DeXsnZuO7lHQlEINI2EAlCOo2R3f1BiYkEvUmbes5X3HI8cRCXWaziVa2Ydmb1uGOBHiK98T9SKpMnSmzop50JFRwpQxN12sd+QJgzlNU/hOB86R6Tjrwr5GNS0Z2vP8AJTbSgBrv9Y1ARKHXTiPWNBSnfGWO5qZhGUF2PbsWSYMDGFyN12C7BwsWabseFI3XY8KxDgLGNgmXkoc1w7tkatJyKi+NmB5bIj2SZccHYcDyhy6Agg5HCOThTLp2jDRc0tLG9DdO+mw/CLJoqkxer1JqbR7Q+8No2GKlo77OdcPZbqHv7J5gw8s0xpThloGBpjljhQ8ISXcrdDqapKmYi8Jss5EjPDYw3iIj2lbnVLAgUF7Gqn2TvpsOcMdG2d5azGmEVZrxpyxMJ57qzFlFFJwijReG+xWtJ2Qy36SX2Tiy7uPI+RjxSsxOB8QYeTpQYEMK1FIrM2W0iYRsOX3h84tKGpWi8o6X8jL6ov8AuDwMETvrsvfHsUqRXYbTP28vmnrG7XHsS/xt6QQQlyyq7CZv8vJ/eTP+MQN/97YII59yxYNa/wBnK7/5ViqiPYI75f1v0OWL9K9TbZ+0OcX609uz/g+EEEU7FyYsQtLdhecEEEQyFoP/ADjfuR6w50//AJWd+7b0jyCPUxf0TBl/rL0KDYsj3ekZTOyvNvUQQRjhybmahHsEEdiqCCCCBJ7GtoIIhgxMPJXZXkPSPYI5TLRINp/bLzX1h1bO00EEVfBDLHO/YH938Ir1m7Pf8oIIp2Jx8mTQm0/2V/EfQR7BF4cM0Zf0oWQQQRBmP//Z"
          alt=""
        />
        <h3 class="nUsuario text-white fw-normal fs-5">KAY/O</h3>
      </div>
      <p class="post text-light p-2">
        No podría diseñar un arma más letal que tu mirada.
      </p>
      <div class="botones-interaccion my-3">
        <Favourite class="botones" />
        <Comment class="botones"/>
        <Share class="botones"/>
      </div>
    </div>
    <div class="postBlogApp mx-4 ultimopost">
      <div class="nAiUser d-flex pt-2 px-3">
        <img
          class="imagenPerfil"
          src="https://images2.minutemediacdn.com/image/upload/c_crop,w_1677,h_943,x_188,y_0/c_fill,w_720,ar_16:9,f_auto,q_auto,g_auto/images/voltaxMediaLibrary/mmsport/dbltap_en_international_web/01frrnznpbjqjk2nw6ca.jpg"
          alt=""
        />
        <h3 class="nUsuario text-white fw-normal fs-5">Neon</h3>
      </div>
      <p class="post text-light p-2 w-100">
        ¿Ya se ha acabado? Pero si estaba calentando.
      </p>
      <div class="botones-interaccion my-3">
        <Favourite class="botones" />
        <Comment class="botones"/>
        <Share class="botones"/>
      </div>
    </div>
    <h2 class="text-white m-2">Trabaja Con Nosotros</h2>
    <p class="text-white m-2 mb-5 px-4 work">Puedes trabajar con nosotros. Envianos tu CV al mail: <span class="span1" href="mailto:rrhhArg@blogApp.com.ar">rrhhArg@blogApp.com.ar</span></p>

</template>

<style scoped>
.p-presentacion {
  line-height: 1.4rem;
}
.span1 {
  font-weight: bold;
  color: #d66853;
}
.ultimopost{
  border-bottom: 1px gray solid;
}
.work{
  border-bottom: 1px gray solid;
  padding-bottom: 1rem;
}

</style>
