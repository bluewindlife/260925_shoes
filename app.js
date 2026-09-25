const products = [
  {
    id:'margot3', priority:1, brand:'VIVAIA', title:'Margot 3.0', price:'¥18,900',
    image:'https://cdn.shopify.com/s/files/1/0532/3063/3157/files/1769999492-f0e17d80-dbfc-4857-9827-562b33075c7c.jpg?crop=center&height=1000&v=1770010314&width=1000',
    url:'https://vivaia.jp/products/flats-margot3-black', source2:'https://vivaia.jp/pages/blog-margot-3-wide-fit-bunion-friendly-new',
    specs:['黒','スクエアトゥ','ヒール 1.0cm','約153g / EU37','伸縮ニット'],
    verdict:'今回の足型仮説に最も素直に合う。夕方の前足部はニットで逃がし、朝の踵は270° U-Cloudパッドで保持する設計。',
    fits:[['前足部','◎ 追従しやすい','good'],['踵保持','◎ 専用パッド','good'],['朝夕変化','◎ 対応しやすい','good'],['見た目','○ きれいめ','mid']],
    good:'Margot 2.0比で前足部に約5%のゆとり。公式は踵パッドがアキレス腱の細い部分を両側から支え、ズレ・浮きを抑えると説明。',
    watch:'「幅広向け」の訴求を、そのまま妻に最適と解釈しない。スクエアトゥの親指側長さと、小趾外側の局所圧を実際に確認。',
    size:'第一試着 24.5cm。24.5で踵浮きが明確かつ左つま先に十分な余裕が残る場合のみ24.0cmを比較。',
    sizeA:'24.5cm', sizeB:'24.0cm 条件付き', sizePoint:'踵浮きと左親指の捨て寸を同時に見る。'
  },
  {
    id:'allday301', priority:2, brand:'ACHILLES / ALL DAY Walk', title:'ALL DAY Walk 301', price:'¥7,920',
    image:'https://achilles-webshop.com/cdn/shop/files/ALD3010-B-1.jpg?v=1692696565&width=800',
    url:'https://achilles-webshop.com/products/ald3010-b',
    specs:['黒','スクエアトゥ','2E','ヒール 約3cm','合皮'],
    verdict:'旧候補より評価を上げる。2Eで容積を増やしすぎず、踵ウレタン＋前滑り軽減が今回の課題に直接効く。',
    fits:[['前足部','○ 要実測','mid'],['踵保持','◎ ウレタン','good'],['朝夕変化','○','mid'],['見た目','○ 仕事向け','mid']],
    good:'公式が「かかとにウレタンスポンジを内蔵し、抜けにくくなった」と明記。インソールも前滑り軽減・衝撃吸収を狙う。',
    watch:'2Eでもトゥ形状が妻の9.5〜9.6cm投影幅に合うとは限らない。夕方、小指外側と親指側の両方を確認。',
    size:'第一試着 24.5cm。踵が余る場合に24.0cmを比較。ただし左足長24.4cmなので、24.0はつま先接触があれば即除外。',
    sizeA:'24.5cm', sizeB:'24.0cm', sizePoint:'前滑りが減るか、小指外側が潰れないか。'
  },
  {
    id:'a0646', priority:3, brand:'Belle & Sofa', title:'A0646 やわらかスエード バレエ', price:'¥11,000',
    image:'https://belleandsofa.itembox.design/item/image/a0646-hyoshi-3.jpg',
    url:'https://www.belle-co.jp/c/pumps/a0646/a0646',
    specs:['黒','ラウンド','ヒール 約1.5cm','約145g / 23.0','日本製'],
    verdict:'見た目と柔らかさは非常に相性が良い。踵擦れ低減には期待できるが、「柔らかい踵＝踵保持が強い」ではないので歩行確認が必須。',
    fits:[['前足部','○ 柔らかい','mid'],['踵保持','△ 未確定','watch'],['朝夕変化','○','mid'],['見た目','◎ 好みに近い','good']],
    good:'公式は履き口とかかとの柔らかさを強く訴求。24.5cm通常幅の公称靴寸法は足囲22.8cm／足幅8.9cmで、足囲は実測23.0cmに近い。',
    watch:'足幅は妻の投影幅9.5〜9.6cmとの差が大きい。ただし測定法差と素材伸びがあるため、数値だけで除外せず、最初の数分で小趾の張りを確認。',
    size:'第一試着 24.5cm通常幅。24.0へのサイズダウンより、24.5の踵保持を確認。前足部だけが明確に苦しい場合は24.5cm幅広特注を次に検討。',
    sizeA:'24.5cm 通常幅', sizeB:'24.5cm 幅広特注（圧迫時）', sizePoint:'幅を増やしたときに踵まで緩くならないか。'
  },
  {
    id:'margaret', priority:4, brand:'VIVAIA', title:'Margaret ボウバレリーナ', price:'¥14,200（調査時）',
    image:'https://cdn.shopify.com/s/files/1/0532/3063/3157/files/1111_2177eb2a-2363-400c-b965-7734e8085dc5.jpg?crop=center&height=1000&v=1729155502&width=1000',
    url:'https://vivaia.jp/products/flats-margaret-blackwoven',
    specs:['黒','スクエアトゥ','リボン','ヒール 1.0cm','伸縮ニット'],
    verdict:'SD007451の「黒・リボン・バレエ」の好みに最も近いVIVAIA。構造上の確度はMargot 3.0より下だが、本人が履きたいと思える可能性は高い。',
    fits:[['前足部','◎ ニット','good'],['踵保持','○ 深め傾向','mid'],['朝夕変化','○','mid'],['見た目','◎ リボン','good']],
    good:'公式レビューには、幅広・甲高でハーフサイズアップを勧める例や、「深めで少し余裕でもパカパカしなかった」という購入者報告がある。',
    watch:'レビューは個人差が大きい。専用踵パッドの説明はMargot 3.0ほど明確ではないため、朝の歩行試着を重視。',
    size:'第一試着 24.5cm。甲・小趾が夕方きつい場合のみ25.0相当を検討。逆に踵浮きが出ても、左つま先余裕を確認せず24.0へ下げない。',
    sizeA:'24.5cm', sizeB:'25.0相当 条件付き', sizePoint:'深さが踵保持に効くか、甲高との相性。'
  },
  {
    id:'sgt606', priority:5, brand:'MOONSTAR SUGATA', title:'MS SGT606', price:'¥8,250',
    image:'https://www.moonstar.co.jp/store/upload/save_image/48900516_3.jpg',
    url:'https://www.moonstar.co.jp/store/products/detail/48900516',
    specs:['黒','ソフトスクエア','3E','ヒール 3cm','約185g / 23.0'],
    verdict:'機能は強い。履き口パッドで踵を締める一方、3E全体容積が朝の足に余らないかが最大の確認点。',
    fits:[['前足部','○ 3E','mid'],['踵保持','◎ 履き口パッド','good'],['朝夕変化','○','mid'],['見た目','○ プレーン','mid']],
    good:'公式が「履き口パッドで踵へのフィット感を高め、踵抜けしにくくする」と明記。ボロネーゼ製法、アナトミーインソール、マザータッチも長時間用途に向く。',
    watch:'3Eだから上位ではない。朝に中足部まで余って前滑りするなら不適。ソフトスクエアでもエジプト型の親指長さは要確認。',
    size:'第一試着 24.5cm。容積・踵が明らかに余り、左つま先に余裕が残る場合は24.0cmも比較。',
    sizeA:'24.5cm', sizeB:'24.0cm 条件付き', sizePoint:'3Eの余剰容積が前滑りにつながらないか。'
  },
  {
    id:'claire', priority:6, brand:'VIVAIA', title:'Claire Walker 超撥水', price:'¥18,900',
    image:'https://cdn.shopify.com/s/files/1/0532/3063/3157/files/1740102381-8d759a1d-a1f7-4167-bd3b-a69ddf61f303.jpg?crop=center&height=1000&v=1741334492&width=1000',
    url:'https://vivaia.jp/products/flats-clairewalkerwaterproof-black',
    specs:['黒','ラウンドトゥ','ヒール 1.5cm','伸縮ニット','発泡クッション'],
    verdict:'丸いつま先の好みと前足部の追従性は良い。Margot 3.0のような専用踵保持が明示されないため、主に「形とクッション」の比較枠。',
    fits:[['前足部','◎ ニット','good'],['踵保持','△ 要確認','watch'],['朝夕変化','○','mid'],['見た目','◎ ラウンド','good']],
    good:'ラウンドトゥ、伸縮ニット、1.5cm、発泡素材クッション。仕事靴として見た目を崩さず、前足部を硬く固定しにくい。',
    watch:'踵の保持構造情報が弱い。朝にSD007451と同様のパカパカが出るなら、前足部が快適でも優先度を下げる。',
    size:'第一試着 24.5cm。24.5で踵浮きがあり、左つま先に1cm以上の余裕が実測できる場合のみ24.0cmを比較。',
    sizeA:'24.5cm', sizeB:'24.0cm 条件付き', sizePoint:'ラウンドトゥの長さと踵の上下動。'
  },
  {
    id:'tree', priority:7, brand:'Allbirds', title:'Tree Breezers / Jet Black', price:'¥11,165（調査時30%OFF）',
    image:'https://itemimg.goldwin.co.jp/itemimg/GDW22/A0GDW0001GXY/02_AO01-432.jpg',
    url:'https://www.goldwin.co.jp/ap/item/i/m/ABW240063',
    specs:['Jet Black','バレエフラット','伸縮メッシュ','SweetFoam EVA','洗濯機可'],
    verdict:'足への追従は期待できるが、今回の最重要課題である踵保持の専用機構は明示されない。比較対象として残す。',
    fits:[['前足部','◎ 伸縮','good'],['踵保持','△ 専用構造なし','watch'],['朝夕変化','○','mid'],['見た目','○ バレエ','mid']],
    good:'公式はユーカリ由来メッシュが「靴下のように足にぴったりフィット」と説明。仕事用途も明示。Jet Black 24.0/24.5/25.0は調査時購入可能。',
    watch:'日本公式が「1サイズアップがおすすめ」と表示。一般的な24.5起点のまま選ばず、このモデルだけ25.0から確認する。',
    size:'第一試着 25.0cm（公式の1サイズアップ推奨を優先）。比較は24.5cm。25.0で踵が浮くなら、24.5の前足部圧迫とのトレードオフを見る。',
    sizeA:'25.0cm', sizeB:'24.5cm', sizePoint:'公式推奨のアップサイズでも踵が保持されるか。'
  }
];

const sources = [
  ['VIVAIA Margot 3.0 公式商品','https://vivaia.jp/products/flats-margot3-black'],
  ['VIVAIA Margot 3.0 公式解説（270°踵パッド）','https://vivaia.jp/pages/blog-margot-3-wide-fit-bunion-friendly-new'],
  ['VIVAIA Margaret 公式商品・レビュー','https://vivaia.jp/products/flats-margaret-blackwoven'],
  ['VIVAIA Claire Walker 公式商品','https://vivaia.jp/products/flats-clairewalkerwaterproof-black'],
  ['VIVAIA サイズ選びのポイント','https://vivaia.jp/pages/sizelist'],
  ['Belle & Sofa A0646 公式','https://www.belle-co.jp/c/pumps/a0646/a0646'],
  ['Belle & Sofa TULIP 公式','https://www.belle-co.jp/c/pumps/tulip/tulip'],
  ['Belle & Sofa PETAL 公式レビュー','https://www.belle-co.jp/c/pumps/petal/petal'],
  ['MOONSTAR SUGATA MS SGT606 公式','https://www.moonstar.co.jp/store/products/detail/48900516'],
  ['ALL DAY Walk 301 公式・購入者レビュー','https://achilles-webshop.com/products/ald3010-b'],
  ['Allbirds Tree Breezers 日本公式','https://www.goldwin.co.jp/ap/item/i/m/ABW240063']
];

function esc(s){return String(s).replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));}
function productCard(p){
  const fit = p.fits.map(([label,val,cls])=>`<div class="fit-cell fit-${cls}"><span>${esc(label)}</span><b>${esc(val)}</b></div>`).join('');
  const pills = p.specs.map(x=>`<span class="pill">${esc(x)}</span>`).join('');
  return `<article class="product-card" data-id="${esc(p.id)}">
    <div class="product-media"><span class="priority">試着 ${p.priority}</span><button type="button" class="image-open" aria-label="${esc(p.title)}の画像を拡大"><img src="${esc(p.image)}" alt="${esc(p.brand+' '+p.title)} 公式画像" loading="lazy" referrerpolicy="no-referrer"></button><div class="image-fallback">公式画像を表示できません。商品ページから確認してください。</div></div>
    <div class="product-body">
      <div class="product-top"><div><div class="product-brand">${esc(p.brand)}</div><h3 class="product-title">${esc(p.title)}</h3></div><div class="product-price">${esc(p.price)}</div></div>
      <div class="meta-row">${pills}</div><div class="verdict">${esc(p.verdict)}</div>
      <div class="fit-grid">${fit}</div>
      <div class="reason-grid"><div class="reason good"><b>合いそうな理由</b>${esc(p.good)}</div><div class="reason watch"><b>要確認</b>${esc(p.watch)}</div></div>
      <div class="size-box"><strong>試着サイズ</strong><p>${esc(p.size)}</p></div>
      <div class="card-links"><a href="${esc(p.url)}" target="_blank" rel="noopener noreferrer">公式ページ ↗</a>${p.source2?`<a class="secondary" href="${esc(p.source2)}" target="_blank" rel="noopener noreferrer">構造解説 ↗</a>`:''}</div>
    </div></article>`;
}

const list=document.querySelector('#productList');
list.innerHTML=products.map(productCard).join('');

const tbody=document.querySelector('#sizeTable tbody');
tbody.innerHTML=products.map(p=>`<tr><td><b>${esc(p.brand)}</b><br>${esc(p.title)}</td><td>${esc(p.sizeA)}</td><td>${esc(p.sizeB)}</td><td>${esc(p.sizePoint)}</td></tr>`).join('');

document.querySelector('#sourceList').innerHTML=sources.map(([name,url])=>`<a href="${esc(url)}" target="_blank" rel="noopener noreferrer">${esc(name)} ↗</a>`).join('');

for(const img of document.querySelectorAll('.product-media img')){
  img.addEventListener('error',()=>img.closest('.product-media').classList.add('is-error'));
}

const dialog=document.querySelector('#imageDialog');
const dialogImg=document.querySelector('#dialogImage');
const dialogCaption=document.querySelector('#dialogCaption');
document.addEventListener('click',e=>{
  const btn=e.target.closest('.image-open');
  if(!btn)return;
  const img=btn.querySelector('img');
  dialogImg.src=img.src; dialogImg.alt=img.alt; dialogCaption.textContent=img.alt;
  if(typeof dialog.showModal==='function')dialog.showModal();
});
document.querySelector('.dialog-close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close();});
