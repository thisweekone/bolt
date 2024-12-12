import React, { useState } from 'react';
import { Phone, Globe, Share2, MessageCircle, Copy, Check } from 'lucide-react';
import Button from '../Button';

interface PromotionActionsProps {
  promotion: {
    id: string;
    company: {
      phone: string;
      whatsapp: string;
      website: string;
    };
  };
}

const PromotionActions = ({ promotion }: PromotionActionsProps) => {
  const [showCoupon, setShowCoupon] = useState(false);
  const [copied, setCopied] = useState(false);
  const couponCode = 'CAFE50OFF'; // In a real app, this would be generated

  const handleGetPromotion = () => {
    setShowCoupon(true);
  };

  const handleShare = async () => {
    const shareUrl = window.location.href;
    
    try {
      if (navigator.share) {
        await navigator.share({
          title: 'Confira esta promoção!',
          text: 'Encontrei uma ótima promoção no HubEmpreenda',
          url: shareUrl,
        });
      } else {
        // Fallback: Copy to clipboard
        await navigator.clipboard.writeText(shareUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch (error) {
      // If share fails or is denied, copy to clipboard
      try {
        await navigator.clipboard.writeText(shareUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (clipboardError) {
        console.error('Failed to copy:', clipboardError);
      }
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      {/* Main CTA */}
      {!showCoupon ? (
        <Button
          fullWidth
          className="mb-4"
          onClick={handleGetPromotion}
        >
          Aproveitar Promoção
        </Button>
      ) : (
        <div className="mb-4">
          <p className="text-sm text-gray-600 mb-2">Seu código promocional:</p>
          <div className="bg-gray-100 p-4 rounded-lg text-center">
            <span className="text-xl font-bold text-[#FA7413]">{couponCode}</span>
          </div>
          <p className="text-sm text-gray-600 mt-2">
            Apresente este código na loja para resgatar sua promoção
          </p>
        </div>
      )}

      {/* Contact Actions */}
      <div className="space-y-3">
        <a
          href={`tel:${promotion.company.phone}`}
          className="flex items-center gap-2 w-full p-3 rounded-lg border-2 border-gray-100 hover:border-[#FA7413] transition-colors"
        >
          <Phone size={20} />
          <span>Ligar para Empresa</span>
        </a>
        
        <a
          href={`https://wa.me/${promotion.company.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 w-full p-3 rounded-lg border-2 border-gray-100 hover:border-[#FA7413] transition-colors"
        >
          <MessageCircle size={20} />
          <span>Enviar Mensagem</span>
        </a>
        
        <a
          href={`https://${promotion.company.website}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 w-full p-3 rounded-lg border-2 border-gray-100 hover:border-[#FA7413] transition-colors"
        >
          <Globe size={20} />
          <span>Visitar Site</span>
        </a>
        
        <button
          onClick={handleShare}
          className="flex items-center gap-2 w-full p-3 rounded-lg border-2 border-gray-100 hover:border-[#FA7413] transition-colors"
        >
          {copied ? (
            <>
              <Check size={20} className="text-green-500" />
              <span>Link Copiado!</span>
            </>
          ) : (
            <>
              <Share2 size={20} />
              <span>Compartilhar</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default PromotionActions;