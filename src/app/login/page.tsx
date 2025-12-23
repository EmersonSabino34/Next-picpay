import Link from "next/link"

export default function Cadastro() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-950 p-6">
      <div className="w-full max-w-md bg-zinc-900 rounded-3xl p-10 shadow-2xl shadow-violet-600">
        
        <h1 className="text-3xl font-bold text-center mb-2">
          Criar Conta
        </h1>

        <p className="text-sm text-zinc-400 text-center mb-8">
          Preencha os dados para criar sua conta
        </p>

        <form className="flex flex-col gap-4">
          
          <input
            type="text"
            placeholder="Nome completo"
            className="w-full rounded-md bg-zinc-800 border-2 border-violet-500 p-3 px-5 text-sm outline-none focus:border-violet-400"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-md bg-zinc-800 border-2 border-violet-500 p-3 px-5 text-sm outline-none focus:border-violet-400"
          />

          <input
            type="password"
            placeholder="Senha"
            className="w-full rounded-md bg-zinc-800 border-2 border-violet-500 p-3 px-5 text-sm outline-none focus:border-violet-400"
          />

          <input
            type="password"
            placeholder="Confirmar senha"
            className="w-full rounded-md bg-zinc-800 border-2 border-violet-500 p-3 px-5 text-sm outline-none focus:border-violet-400"
          />

          <button
            type="submit"
            className="mt-4 bg-green-600 hover:bg-violet-600 duration-200 p-3 rounded-md font-semibold"
          >
            Criar Conta
          </button>
        </form>

        <div className="text-center mt-6">
          <span className="text-sm text-zinc-400">
            Já tem uma conta?
          </span>
          <Link
            href="/login"
            className="text-sm text-violet-400 hover:underline ml-1"
          >
            Entrar
          </Link>
        </div>

      </div>
    </div>
  )
}
