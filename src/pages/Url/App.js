import React, { useState } from 'react';
import { toast } from 'react-toastify'
import { MdContentCopy } from 'react-icons/md'

import Header from '../../components/Header';
import UrlComponent from '../../components/UrlComponent'
import api from '../../service/api'

import * as Styles from './style'


function App() {
  const [infos, setInfos] = useState({ url: '' })
  const [lastItem, setLastItem] = useState()

  const handleInputChange = (e) => {
      setInfos({ ...infos, [e.target.name]: e.target.value });
  }

  async function enviaUrl(e) {
    if (infos === "") {
      e.preventDefault();
      toast.error('Digite um link!')
    }
    else {
      e.preventDefault();

      await api.post('/url', infos).then(() => {

      }).catch((e) => console.log(e))
      setTimeout(() => {

        loadInfos()
      })
    }
  }

  async function loadInfos() {

    setTimeout(async () => {
      await api.get("/url").then((res) => {
        pegaUrl(res.data.urls)
      }).catch((e) => console.log(e))
    }, 200)
  }

  function pegaUrl(newData) {

    if (newData) {
      const ultimoItem = newData[newData.length - 1]
      setLastItem(ultimoItem)
    }
  }

  const copyText = async (url) => {
    await navigator.clipboard.writeText(url)
    toast.success('Copiado com sucesso!')
  }

  return (
    <Styles.WrapperUrl>
      <Header />
      <UrlComponent
        handleChange={handleInputChange}
        enviaDados={enviaUrl && enviaUrl}
      />
      <div className='list'>
        {lastItem && lastItem &&
          < React.Fragment key={lastItem.id}>
            <ul>
              <li onClick={() => {
                copyText(`localhost:3006/${lastItem.urlHash}`)
              }}>
                {`localhost:3006/${lastItem.urlHash}`}
                <i>
                <MdContentCopy/>
                </i>
              </li>
            </ul>
          </React.Fragment>
        }
      </div>

    </Styles.WrapperUrl>

  );
}

export default App;
