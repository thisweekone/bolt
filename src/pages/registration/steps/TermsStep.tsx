import React from 'react';
import { FileText } from 'lucide-react';
import Button from '../../../components/Button';

interface TermsStepProps {
  accepted: boolean;
  onUpdate: (accepted: boolean) => void;
  onSubmit: () => void;
  onBack: () => void;
}

const TermsStep = ({ accepted, onUpdate, onSubmit, onBack }: TermsStepProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="bg-gray-50 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-4">
          <FileText className="text-[#FA7413]" size={24} />
          <h3 className="text-lg font-semibold">Termos e Condições</h3>
        </div>

        <div className="prose prose-sm max-w-none">
          <p>
            Ao criar uma conta no HubEmpreenda, você concorda com nossos termos de uso
            e política de privacidade. Leia atentamente os termos abaixo:
          </p>

          <h4>1. Responsabilidades da Empresa</h4>
          <ul>
            <li>Fornecer informações verdadeiras e atualizadas</li>
            <li>Manter suas credenciais de acesso em segurança</li>
            <li>Respeitar as diretrizes da plataforma</li>
          </ul>

          <h4>2. Uso da Plataforma</h4>
          <ul>
            <li>A empresa deve manter suas informações atualizadas</li>
            <li>Promoções e ofertas devem ser verdadeiras e válidas</li>
            <li>Respeitar os direitos dos consumidores</li>
          </ul>

          <h4>3. Política de Privacidade</h4>
          <ul>
            <li>Seus dados serão protegidos conforme a LGPD</li>
            <li>Informações sensíveis são criptografadas</li>
            <li>Você pode solicitar exclusão dos seus dados a qualquer momento</li>
          </ul>
        </div>

        <div className="mt-6">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              checked={accepted}
              onChange={(e) => onUpdate(e.target.checked)}
              className="rounded border-gray-300 text-[#FA7413] focus:ring-[#FA7413]"
              required
            />
            <span className="ml-2 text-sm text-gray-700">
              Li e aceito os termos de uso e política de privacidade
            </span>
          </label>
        </div>
      </div>

      <div className="flex justify-between">
        <Button type="button" variant="outline" onClick={onBack}>
          Voltar
        </Button>
        <Button type="submit" disabled={!accepted}>
          Finalizar Cadastro
        </Button>
      </div>
    </form>
  );
};

export default TermsStep