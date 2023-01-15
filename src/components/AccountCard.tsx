interface Props {
  owner: string;
  accountNumber: string;
  bankLogoSrc: string;
  onClick: (copiedText: string) => void;
}

function AccountCard({ owner, accountNumber, bankLogoSrc, onClick }: Props) {
  const handleClick = () => {
    onClick(accountNumber.split(' ').join(''));
  };

  return (
    <div
      onClick={handleClick}
      className="flex flex-col justify-center gap-4 bg-slate-50 h-52 rounded-lg p-4 wavy-bg shadow hover:shadow-lg focus:shadow-lg w-full max-w-sm"
    >
      <img src={bankLogoSrc} className="w-32" />
      <div>
        <p className="text-sm text-slate-500">Nomor Rekening:</p>
        <p className="font-mono text-xl tracking-wide text-slate-800">
          {accountNumber}
        </p>
      </div>
      <p className="pb-4">{owner}</p>
    </div>
  );
}

export default AccountCard;
