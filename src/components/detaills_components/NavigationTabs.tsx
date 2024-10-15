import React from 'react'

const NavigationTabs = () => {
  return (
    <section className='px-20 pt-10'>
        <div className='flex flex-row gap-5'>
            <button className="p-3 w-32 text-zinc-400 cursor-pointer border border-zinc-400 hover:border-cyan-800 hover:text-cyan-800 rounded-md">Informações gerais</button>
            <button className="p-3 w-32 text-zinc-400 cursor-pointer border border-zinc-400 hover:border-cyan-800 hover:text-cyan-800 rounded-md">Detalhes do produto</button>
            <button className="p-3 w-32 text-zinc-400 cursor-pointer border border-zinc-400 hover:border-cyan-800 hover:text-cyan-800 rounded-md">Avaliações</button>

        </div>
    </section>
  )
}

export default NavigationTabs
