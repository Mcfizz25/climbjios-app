import { Link as RouterLink } from 'react-router-dom';
// @mui
import { Box, BoxProps } from '@mui/material';
// @components
import logoImg from '../assets/logo.jpeg';

// ----------------------------------------------------------------------

interface Props extends BoxProps {
  disabledLink?: boolean;
}

export default function Logo({ disabledLink = false, sx }: Props) {
  const logo = (
    <Box
      sx={{
        width: 50,
        height: 50,
        ...sx,
      }}
    >
      <img src={logoImg} alt="logo" />
      {/* <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 415 400" fill="none">
        <path style={{fill:"#ffffff", stroke:"none"}} d="M0 0L0 451L452 451L452 0L0 0z"/>
        <path style={{fill:"#aed0db", stroke:"none"}} d="M221 55L222 56L221 55z"/>
        <path style={{fill:"#d4a7c4", stroke:"none"}} d="M89 160C98.286 155.26 105.777 147.377 115 142.312C141.812 127.587 176.54 121.154 200.996 144.09C206.802 149.536 211.191 155.922 214.752 163C220.513 174.447 223.544 186.73 227 199C206.3 202.843 186.987 205.605 167 213.05C153.504 218.077 135.879 228.159 121 225.529C96.3973 221.18 88.4298 185.821 88 165L87 165C86.0345 189.032 97.6728 233.216 129.907 228.866C146.732 226.595 163.511 211.799 181 213C186.749 203.392 209.749 203.143 219.999 201.844C259.614 196.825 292.336 211.336 331 217.562C349.678 220.569 364.572 216.211 373.11 198C392.471 156.708 349.674 108.719 319 86.4252C296.258 69.8967 270.229 57.8579 242 55.1698C179.88 49.2542 97.3903 93.9555 89 160z"/>
        <path style={{fill:"#aed0db", stroke:"none"}} d="M244 55L245 56L244 55M212 56L213 57L212 56M206 57L207 58L206 57M257 57L258 58L257 57M261 58L262 59L261 58M265 59L266 60L265 59M268 60L269 61L268 60M186 62L187 63L186 62M274 62L275 63L274 62M277 63L278 64L277 63M284 66L285 67L284 66M286 67L287 68L286 67M300 74L301 75L300 74M152 77L153 78L152 77M314 83L315 84L314 83M134 89L135 90L134 89M328 94L329 95L328 94M336 101L337 102L336 101M116 105L117 106L116 105M340 105L341 106L340 105M341 106L342 107L341 106M342 107L343 108L342 107M106 117L107 118L106 117M351 117L352 118L351 117M102 123L103 124L102 123M357 125L358 126L357 125z"/>
        <path style={{fill:"#9d7bab", stroke:"none"}} d="M227 199C223.357 181.352 217.651 161.898 205.7 148.001C183.463 122.143 146.642 125.898 119 139.753C109.943 144.293 94.2542 151.818 89.4336 161.171C86.918 166.051 88.548 171.861 89 177C90.4778 193.8 98.5911 218.228 116 224.451C127.131 228.431 140.5 223.535 151 219.575C167.479 213.36 183.784 206.846 201 202.887C209.576 200.915 218.526 201.018 227 199z"/>
        <path style={{fill:"#aed0db", stroke:"none"}} d="M97 132L98 133L97 132M95 136L96 137L95 136M91 147L92 148L91 147M89 156L90 157L89 156M374 158L375 159L374 158z"/>
        <path style={{fill:"#d4a7c4", stroke:"none"}} d="M88 161L88 164L89 164L88 161z"/>
        <path style={{fill:"#aed0db", stroke:"none"}} d="M87 162L80 170L87 162z"/>
        <path style={{fill:"#afb2cc", stroke:"none"}} d="M87 163C76.1151 173.892 66.6821 185.879 60.3117 200C37.2813 251.05 62.9755 307.828 101.015 344.09C117.178 359.498 138.182 374.925 161 378C149.169 361.205 132.302 347.131 136.465 324C142.435 290.827 181.105 266.937 211 258.144C218.393 255.97 234.517 249.718 241.786 254.028C245.166 256.031 245.958 260.628 247.308 264C251.036 273.313 254.558 283.108 256.385 293C266.417 347.307 214.411 385.371 164 379C173.085 390.771 192.858 397.778 207 400.789C264.061 412.941 325.017 371.837 318.829 310C316.497 286.692 298.372 265.475 276 259.155C268.003 256.896 249.119 257.495 243.499 251.682C236.02 243.946 233.302 226.185 230.884 216C230 212.276 229.833 204.429 226.436 202.042C220.881 198.139 205.028 204.197 199 205.482C192.665 206.833 183.798 205.865 181 213C163.19 211.044 146.068 227.002 128.96 228.852C103.387 231.617 90.8934 200.149 87.3279 180C86.3363 174.396 88.2748 168.324 87 163z"/>
        <path style={{fill:"#aed0db", stroke:"none"}} d="M77 173L78 174L77 173M377 173L378 174L377 173M76 174L77 175L76 174M75 175L76 176L75 175M72 179L73 180L72 179M377 181L378 182L377 181M70 182L71 183L70 182M69 183L70 184L69 183M66 188L67 189L66 188M376 188L377 189L376 188M65 190L66 191L65 190z"/>
        <path style={{fill:"#d4a7c4", stroke:"none"}} d="M70 190L70 191L73 191L73 190L70 190M84 192L84 197L85 197L86 192L84 192z"/>
        <path style={{fill:"#aed0db", stroke:"none"}} d="M63 193L64 194L63 193M374 194L375 195L374 194M62 195L63 196L62 195M61 197L62 198L61 197M60 199L61 200L60 199M240.667 199.333L241.333 199.667L240.667 199.333M255 200L256 201L255 200M227 201L228 202L227 201M370 202L371 203L370 202M274 203L275 204L274 203M58 204L59 205L58 204M279 204L280 205L279 204M369 204L370 205L369 204z"/>
        <path style={{fill:"#d4a7c4", stroke:"none"}} d="M63 205L64 206L63 205M224 205L225 206L224 205M226 205L227 206L226 205z"/>
        <path style={{fill:"#aed0db", stroke:"none"}} d="M228 205L229 206L228 205M57.3333 206.667L57.6667 207.333L57.3333 206.667z"/>
        <path style={{fill:"#d4a7c4", stroke:"none"}} d="M89 208L92 206L89 208z"/>
        <path style={{fill:"#aed0db", stroke:"none"}} d="M56 209L57 210L56 209M229 209L230 210L229 209M365 209L366 210L365 209M364 210L365 211L364 210M306 211L307 212L306 211M55 212L56 213L55 212M310 212L311 213L310 212M230.333 213.667L230.667 214.333L230.333 213.667M231 218L232 219L231 218M338 218L339 219L338 218M347 218L348 219L347 218M53 219L54 220L53 219M232.333 221.667L232.667 222.333L232.333 221.667z"/>
        <path style={{fill:"#d4a7c4", stroke:"none"}} d="M96.6667 222.333L97.3333 222.667L96.6667 222.333z"/>
        <path style={{fill:"#aed0db", stroke:"none"}} d="M52.3333 224.667L52.6667 225.333L52.3333 224.667M233 225L234 226L233 225M234 229L235 230L234 229M51 230L51 234L52 234L51 230M235 232L236 233L235 232M236 235L237 236L236 235M237 238L238 239L237 238M238 241L239 242L238 241M240 246L241 247L240 246z"/>
        <path style={{fill:"#d4a7c4", stroke:"none"}} d="M54 248L54 253L55 253L54 248z"/>
        <path style={{fill:"#aed0db", stroke:"none"}} d="M241 248L242 249L241 248M51 250L51 253L52 253L51 250M242 251L243 252L242 251z"/>
        <path style={{fill:"#9d7bab", stroke:"none"}} d="M232 253.425C196.771 258.221 156.695 277.779 140.373 311C129.693 332.739 140.386 366.258 162 378.012C169.261 381.96 183.021 380.75 191 379.711C224.014 375.41 257.833 345.574 257.999 311C258.07 296.336 254.477 282.763 249.655 269C248.203 264.857 246.649 257.616 243.348 254.603C240.555 252.054 235.394 252.963 232 253.425z"/>
        <path style={{fill:"#aed0db", stroke:"none"}} d="M244.667 253.333L245.333 253.667L244.667 253.333M251 254L251 255L256 255L251 254M260.667 255.333L261.333 255.667L260.667 255.333M265.667 256.333L266.333 256.667L265.667 256.333M52.3333 257.667L52.6667 258.333L52.3333 257.667M269 257L269 258L272 258L269 257M273.667 258.333L274.333 258.667L273.667 258.333M277 259L278 260L277 259M280 260L281 261L280 260M282 261L283 262L282 261M53.3333 262.667L53.6667 263.333L53.3333 262.667M284 262L285 263L284 262M286.667 263.333L287.333 263.667L286.667 263.333M290 265L291 266L290 265M54 266L55 267L54 266M292 266L293 267L292 266M293 267L294 268L293 267M296 269L297 270L296 269M55 270L56 271L55 270M297 270L298 271L297 270M298 271L299 272L298 271z"/>
        <path style={{fill:"#d4a7c4", stroke:"none"}} d="M62 272L63 273L62 272z"/>
        <path style={{fill:"#aed0db", stroke:"none"}} d="M299 272L300 273L299 272M56 273L57 274L56 273M300 273L301 274L300 273M301 274L302 275L301 274M302 275L303 276L302 275z"/>
        <path style={{fill:"#d4a7c4", stroke:"none"}} d="M62 276L63 277L62 276z"/>
        <path style={{fill:"#aed0db", stroke:"none"}} d="M303 276L304 277L303 276M57 277L58 278L57 277M304 277L305 278L304 277M305 278L306 279L305 278M307 281L308 282L307 281M59 282L60 283L59 282M308 283L309 284L308 283M309 284L310 285L309 284M310 286L311 287L310 286M61 287L62 288L61 287M62 289L63 290L62 289M63 291L64 292L63 291M64 293L65 294L64 293M314 294L315 295L314 294M315 296L316 297L315 296M316.333 298.667L316.667 299.333L316.333 298.667M303 369C331.763 375.848 362.905 343.695 351.521 315C347.348 304.481 330.51 290.129 319.894 302.055C315.539 306.947 319.488 322.412 318.829 329C317.268 344.621 307.488 354.942 303 369z"/>
        <path style={{fill:"#d4a7c4", stroke:"none"}} d="M70 302L71 303L70 302z"/>
        <path style={{fill:"#aed0db", stroke:"none"}} d="M317 302L318 303L317 302z"/>
        <path style={{fill:"#ffffff", stroke:"none"}} d="M338 302L339 303L338 302z"/>
        <path style={{fill:"#aed0db", stroke:"none"}} d="M69 303L70 304L69 303M70 305L71 306L70 305z"/>
        <path style={{fill:"#d4a7c4", stroke:"none"}} d="M76 305L77 306L76 305z"/>
        <path style={{fill:"#aed0db", stroke:"none"}} d="M72 308L73 309L72 308M73 310L74 311L73 310M75 313L76 314L75 313M77 316L78 317L77 316M78 317L79 318L78 317M79 319L80 320L79 319M82 323L83 324L82 323M83 324L84 325L83 324M85 327L86 328L85 327M86 328L87 329L86 328M87 329L88 330L87 329z"/>
        <path style={{fill:"#d4a7c4", stroke:"none"}} d="M94 330L95 331L94 330z"/>
        <path style={{fill:"#aed0db", stroke:"none"}} d="M90 333L91 334L90 333M91 334L92 335L91 334M92 335L93 336L92 335M93 336L94 337L93 336z"/>
        <path style={{fill:"#d4a7c4", stroke:"none"}} d="M100 337L100 338L104 338L100 337z"/>
        <path style={{fill:"#aed0db", stroke:"none"}} d="M94 337L95 338L94 337M95 338L96 339L95 338M98 341L99 342L98 341M99 342L100 343L99 342M100 343L101 344L100 343M101 344L102 345L101 344z"/>
        <path style={{fill:"#ffffff", stroke:"none"}} d="M317 344L318 345L317 344z"/>
        <path style={{fill:"#aed0db", stroke:"none"}} d="M102 345L103 346L102 345M103 346L104 347L103 346M104 347L105 348L104 347M105 348L106 349L105 348M106 349L107 350L106 349z"/>
        <path style={{fill:"#ffffff", stroke:"none"}} d="M345 349L346 350L345 349z"/>
        <path style={{fill:"#aed0db", stroke:"none"}} d="M110 352L111 353L110 352M111 353L112 354L111 353z"/>
        <path style={{fill:"#d4a7c4", stroke:"none"}} d="M119 353L120 354L119 353z"/>
        <path style={{fill:"#ffffff", stroke:"none"}} d="M339 355L340 356L339 355z"/>
        <path style={{fill:"#aed0db", stroke:"none"}} d="M115 356L116 357L115 356M116 357L117 358L116 357M119 359L120 360L119 359M122 361L123 362L122 361M125 363L126 364L125 363M128 365L129 366L128 365M130 366L131 367L130 366M132 367L133 368L132 367z"/>
        <path style={{fill:"#ffffff", stroke:"none"}} d="M304 367L305 368L304 367z"/>
        <path style={{fill:"#aed0db", stroke:"none"}} d="M134 368L135 369L134 368z"/>
        <path style={{fill:"#d4a7c4", stroke:"none"}} d="M146 368L147 369L146 368M144 369L145 370L144 369M148 369L149 370L148 369z"/>
        <path style={{fill:"#aed0db", stroke:"none"}} d="M301 369L302 370L301 369M138 370L139 371L138 370M140 371L141 372L140 371M142 372L143 373L142 372M145 373L146 374L145 373M147 374L148 375L147 374M150 375L151 376L150 375M153 376L154 377L153 376M295 376L296 377L295 376M157 377L158 378L157 377M160.667 378.333L161.333 378.667L160.667 378.333M163 379L164 380L163 379M164 380L165 381L164 380M290 380L291 381L290 380M289 381L290 382L289 381M288 382L289 383L288 382M168 383L169 384L168 383M286.667 383.333L287.333 383.667L286.667 383.333M285 384L286 385L285 384M171 385L172 386L171 385M284 385L285 386L284 385M282 386L283 387L282 386M174 387L175 388L174 387M281 387L282 388L281 387M176 388L177 389L176 388M279 388L280 389L279 388M177 389L178 390L177 389M278 389L279 390L278 389M179 390L180 391L179 390M276 390L277 391L276 390M181 391L182 392L181 391M274 391L275 392L274 391M183 392L184 393L183 392M272 392L273 393L272 392M185 393L186 394L185 393M270.667 393.333L271.333 393.667L270.667 393.333M187 394L188 395L187 394M190 395L191 396L190 395M266 395L267 396L266 395M192.667 396.333L193.333 396.667L192.667 396.333M264 396L265 397L264 396M194.667 397.333L195.333 397.667L194.667 397.333M262 397L263 398L262 397M198 398L199 399L198 398M259 398L260 399L259 398M201 399L202 400L201 399M256 399L257 400L256 399M204.667 400.333L205.333 400.667L204.667 400.333M252 400L253 401L252 400M209.667 401.333L210.333 401.667L209.667 401.333M248 401L249 402L248 401M214 402L214 403L217 403L214 402M241 402L241 403L244 403L241 402M224 403L224 404L235 404L224 403z"/>
      </svg> */}
    </Box>
  );

  if (disabledLink) {
    return <>{logo}</>;
  }

  return <RouterLink to="/">{logo}</RouterLink>;
}
