import {arma} from './arma'
import {metralhadora} from './metralhadora'

let pistola = new arma(10, 10)
pistola.atirar(1)
pistola.informarBalas()

let ak = new metralhadora(300, 300, 1200)
ak.atirar(5)
ak.informarBalas()