import './formulario-de-evento.estilos.css'
import { CampoDeEntrada } from "../CampoDeEntrada";
import { CampoDeFormulario } from "../CampoDeFormulario";
import { Label } from "../Label";
import { TituloFormulario } from "../TituloFormulario";
import { Botao } from '../Botao';
import { ListaSuspensa } from '../ListaSuspensa';

export function FormularioDeEvento({ temas, onSubmit }) {
	function onFormSubmit(formData) {
		const evento =
		{
			capa: formData.get('capa'),
			tema: temas.find(function (item) {
				return item.id == formData.get('tema')
			}),
			data: new Date(formData.get('dataEvento')),
			titulo: formData.get('nomeEvento')
		};
		onSubmit(evento);
	}

	return (
		<form className="form-evento" action={onFormSubmit}>
			<TituloFormulario>
				Preencha para criar um evento:
			</TituloFormulario>
			<div className='campos'>
				<CampoDeFormulario>
					<Label htmlFor="nome">
						Qual o nome do evento?
					</Label>
					<CampoDeEntrada type="text" id="nome" placeholder="Summer dev hits" name="nomeEvento" />
				</CampoDeFormulario>
				<CampoDeFormulario>
					<Label htmlFor="capa">
						Qual o endereço da imagem de capa?
					</Label>
					<CampoDeEntrada type="text" id="capa" placeholder="https://..." name="capa" />
				</CampoDeFormulario>
				<CampoDeFormulario>
					<Label htmlFor="dataEvento">
						Data do evento
					</Label>
					<CampoDeEntrada type="date" id="dataEvento" name="dataEvento" />
				</CampoDeFormulario>
				<CampoDeFormulario>
					<Label htmlFor="tema">
						Tema do evento
					</Label>
					<ListaSuspensa id="tema" name="tema" items={temas} />
				</CampoDeFormulario>
			</div>
			<div className='acoes'>
				<Botao>
					Criar evento
				</Botao>
			</div>
		</form>
	)
}