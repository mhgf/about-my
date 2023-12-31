export default function Me() {
  const birthday = new Date(1997, 7, 2);
  const mls = Date.now() - birthday.getTime();
  const diff = new Date(mls);
  const age = Math.abs(diff.getUTCFullYear() - 1970);
  return (
    <div className="space-y-4">
      <h1 className="text-5xl text-slate-300">Sobre mim</h1>
      <h4>
        <span className="text-fuchsia-700">{age} anos</span> /
        <span className="text-fuchsia-700"> Florianopolis-SC</span>
      </h4>
      <p>
        Sou um desenvolvedor, no qual em aproximadamente 6 anos pude iniciar
        minha jornada na programaçao. Acredito que o que que transforma um otimo
        profissional e o foco, algo que sempre prezo em aplicar no meu dia a
        dia.
      </p>
      <p>
        Uma das minhas principais qualidades é minha grande sede de
        conhecimento, sou um homem completamente obstinado e em busca de
        aperfoiçoamento constante, estou sempre me atualizando nas construçoes e
        descobertas da area.
      </p>
      <p>
        Iniciei meu contato com a tecnologia aos meus 15 anos, foi entao quando
        me encantei com a possibilidade de contribuir para o avanço e o
        desenvolvimento global, no qual é capaz de mudar vidas e fazer historia.
      </p>
      <p>
        Desde entao venho conciliando minha vida com minhas paixoes, a
        tecnologia, esportes e minhas habilidades na musica, como tocar violao e
        guitarra, sendo possivel viver meus melhores momentos com as coisas que
        me cativam e me tornam quem sou.
      </p>
    </div>
  );
}
