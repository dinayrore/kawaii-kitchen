import "../styles/globals.css";

interface KawaiiKitchenProps {
  Component: React.FC;
  pageProps: any;
}

const KawaiiKitchen: React.FC<KawaiiKitchenProps> = ({
  Component,
  pageProps,
}) => {
  return <Component {...pageProps} />;
};

export default KawaiiKitchen;
