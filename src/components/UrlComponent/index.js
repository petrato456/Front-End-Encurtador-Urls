import * as Styles from './styles'


export default function UrlComponent({ handleChange, onFormSubimit, enviaDados, clean }) {

    return (
        <Styles.WrapperUrlComponent>
            <h1>Encurte sua url</h1>

            <form >
                <input
                    type='text'
                    name='url'
                    placeholder='Digite seu link'
                    onChange={handleChange}

                />
                <button onClick={enviaDados}>Encurtar</button>
            </form>

        </Styles.WrapperUrlComponent>
    )
}
