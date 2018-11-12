import {arma} from './arma'
import {metralhadora} from './metralhadora'

let pistola = new arma(10, 10)
pistola.atirar(1)
pistola.informarBalas()

let ak = new metralhadora(10, 10)
ak.atirar()
ak.informarBalas()