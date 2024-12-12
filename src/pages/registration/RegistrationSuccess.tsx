import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';

const RegistrationSuccess = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-sm p-8 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-green-500" />
        </div>

        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Cadastro Enviado com Sucesso!
        </h1>

        <p className="text-gray-600 mb-8">
          Seu cadastro foi recebido e está em análise. Em breve, nossa equipe entrará
          em contato através do e-mail cadastrado com a confirmação do seu acesso.
        </p>

        <div className="space-y-4">
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-medium text-gray-900 mb-2">Próximos Passos:</h3>
            <ul className="text-sm text-gray-600 text-left space-y-2">
              <li className="flex items-center gap-2">
                <ArrowRight size={16} className="text-[#FA7413]" />
                Aguarde o e-mail de confirmação
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight size={16} className="text-[#FA7413]" />
                Complete seu perfil empresarial
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight size={16} className="text-[#FA7413]" />
                Comece a divulgar suas promoções
              </li>
            </ul>
          </div>

          <Link to="/">
            <Button fullWidth>
              Voltar para a Página Inicial
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegistrationSuccess;