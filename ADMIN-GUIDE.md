# 🔐 Ahoana ny fampiasana ny Admin Panel — Soltex

## 1) Fametrahana voalohany (indray mandeha ihany)

1. Alefaso ao amin'ny **Supabase Dashboard → SQL Editor** ny fichier
   `supabase/schema.sql` (raha mbola tsy nataonao), avy eo ny
   `supabase/admin-schema.sql`.
2. Mankanesa any amin'ny **Authentication → Users → Add user →
   Create new user**.
   - Ampidiro ny email sy password tianao (ianao irery no mahalala
     azy io — tahirizo tsara).
   - Marino ny "Auto Confirm User" mba ho azo ampiasaina avy hatrany.

## 2) Ny fomba hidirana ao amin'ny site

1. Sokafy ny site.
2. **Soraty avy hatrany ny teny miafina**: `soltexadmin` (na aiza na
   aiza eo amin'ny pejy no misy ny curseur, tsy mila mikitika na
   inona na inona — soraty fotsiny ny litera tsirairay tsy misy
   fiatoana lava loatra).
3. Hiseho eo ambany havanan'ny pejy ny bokotra kely ⚙ — tsy hita
   afa-tsy aminao izay mahalala ny teny miafina io bokotra io.
4. Tsindrio ⚙ → ampidiro ny email/password noforoninao tao amin'ny
   Supabase → **"Hiditra"**.
5. Rehefa vita ny fidirana voalohany, dia **hitadidy ny finday/
   solosaina nampiasainao** ilay bokotra ⚙, ka tsy ilaina averina
   soratana ilay teny miafina intsony amin'io appareil io.

## 3) Ao anaty panel admin

- **📦 Produits** — ampio / ovay / fafao produit, apetraho sary
  (upload mivantana, tsy mila lien), prix, description, points forts.
- **✏️ Contenu du site** — ovay ny lahatsoratra amin'ny hero section
  (lohateny, famaritana, statistika).
- **🧾 Commandes** — jereo ny commande sy hafatra tonga rehetra.

Ny fanovana rehetra dia **miseho eo amin'ny site avy hatrany**, tsy
mila mandeha VS Code na mandefa fichier vaovao.

## Fanamarihana momba ny fiarovana
- Ny bokotra admin dia **miafina** amin'ny mpitsidika rehetra —
  tsy hita raha tsy fantany ilay teny miafina.
- Na dia hita aza ny bokotra na ny code amin'ny navigateur, dia tsy
  misy fomba hiditra ao anaty panel raha tsy manana ny email/password
  noforoninao tao amin'ny Supabase.
- Aza mizara io email/password io amin'olona hafa.
