import './lista-suspensa.estilos.css'

export function ListaSuspensa ({ items, ...rest }) {
    return (
        <select {...rest} className='lista-suspensa-form' defaultValue="">
            <option value="" disabled>Selecione uma opção</option>
            {items.map(function (item) {
                return (
                    <option key={item.id} value={item.id}>
                        {item.nome}
                    </option>
                )
            }) }
        </select>
    )
}