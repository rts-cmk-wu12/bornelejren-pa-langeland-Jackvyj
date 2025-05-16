import React from 'react';
import SponsorForm from '../components/SponsorForm';

function Sponsor() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4 center">Tilmelding som sponsor</h1>
      <p className='center'>
        <p>
        Da det er meget individuelt, hvor meget en virksomhed kan og ønsker at støtte med, har vi
        opdelt støttemulighederne i 3 kategorier:
        </p>
        <p>
        Børnesponsorat
        Hvis din virksomhed vælger at blive børnesponsor, dækker I omkostningerne for et
        navngivet barns ophold og transport til og fra Langeland. Prisen pr. barn varierer fra lejr til
        lejr, men vi har fastsat en gennemsnitspris på kr. 4.000,- pr. barn for et ophold. Denne pris
        inkluderer transport, forplejning, forsikring, udflugter, adgangsbilletter til udflugtsmålene,
        smågaver og slik til ét barn.
        </p>
        <p>
        Lejrsponsorat
        For kr. 2.000,- kan virksomheden blive lejrsponsor og være med til at dække alle
        omkostningerne ved børnelejren, som bl.a. omfatter ejendommens drifts- og
        vedligeholdelsesomkostninger samt eventuelle ekstra udgifter omkring en lejr, der f.eks.
        kan være løn til specialuddannet personale.
        </p>
        Støtte til foreningen
        Virksomheder, der ønsker at støtte foreningens arbejde med et mindre beløb, kan vælge
        at blive diplomsponsorer. Af administrative årsager skal der minimum støttes med kr.
        1.000,- for at man kan modtage et trykt diplom til ophængning i virksomheden, men alle
        støttebeløb - store som små - er naturligvis velkomne.
        <p>
      <SponsorForm />
      </p>
      </p>
    </div>
  );
}

export default Sponsor;
