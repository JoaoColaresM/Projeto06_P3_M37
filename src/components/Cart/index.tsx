import Button from "../Button"
import {Overlay,CartConteiner,Prices,Quantity,Sidebar,CartItem} from './styled'
import starWars from '../../assets/images/star_wars.png'
import Tag from "../Tag"

const Cart = () => (
  <CartConteiner>
    <Overlay />
    <Sidebar>
      <ul>
        <CartItem>
          <img src={starWars} />
          <div>
            <h3>Nome do jogo</h3>
            <Tag>RPG</Tag>
            <Tag>PS5</Tag>
            <span>R$ 150,00</span>
          </div>
          <button type="button"/>
        </CartItem>
        <CartItem>
          <img src={starWars} />
          <div>
            <h3>Nome do jogo</h3>
            <Tag>RPG</Tag>
            <Tag>PS5</Tag>
            <span>R$ 150,00</span>
          </div>
          <button type="button"/>
        </CartItem>
      </ul>
      <Quantity>2 jogo(s) no carrinho</Quantity>
      <Prices>Total de R$ 250,00 <span>Em até 6x sem juros</span></Prices>
      <Button title="Continuar compra" type="button">
        Continuar com a compra
      </Button>
    </Sidebar>
  </CartConteiner>
)

export default Cart