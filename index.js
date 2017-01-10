var fs = require('fs');
var PDF = require('pdfkit');
var blobStream = require("blob-stream");
var strftime = require('strftime');

var doc = new PDF({
  size: "A4",
  margins: {top: 50, bottom: 55, left: 72, right: 72}
});

doc.font("simsun.ttf");
doc.fontSize(25)
  .text('粤通医药网采购合同', {align: 'center'});

var data = {
  seller: {
    name: '神木医药网采购合同',
    legalName: '王伟'
  },
  buyer: {
    name: "成都雨诺大药房221分店",
    legalName: '王伟'
  },
  order: {
    goods: [
      {
        name: "多乐士双保超薄避孕套",
        spec: "12 片",
        producer: "东洋松蒲乳胶（锦州）有限公司",
        unit: "盒",
        quantity: 100.00,
        price: 8.00,
        subtotal: 800.00
      },
      {
        name: "红外线电子体温计",
        spec: "TET-310",
        producer: "信利仪器(汕尾)有限公司",
        unit: "支",
        quantity: 50.00,
        price: 10.00,
        subtotal: 500.00
      }
    ],
    total: 1234.00,
    freight: 100.00,
    sum: 1334.00
  }
};


var config = {
  main: {
    indent: 24,
    lineGap: 1,
    paragraphGap: 3
  }
};

emptyline(1, doc);
doc.fontSize(12)
  .text("甲方: " + data.buyer.name);
emptyline(1, doc);
doc.fontSize(12)
  .text("甲方法人名: " + data.buyer.legalName);
emptyline(1, doc);
doc.fontSize(12)
  .text("乙方: " + data.seller.name);
emptyline(1, doc);
doc.fontSize(12)
  .text("乙方法人名: " + data.seller.legalName);
emptyline(1, doc);
doc.fontSize(12)
  .text("根据《互联网药品信息服务管理办法》、《互联网药品交易服务管理办法》的要求，为确保药品网上交易的顺利进行，明确交易双方的权利和义务，特订立本合同。", config.main);
doc.fontSize(12)
  .text("第一条 甲方须根据乙方在神木医药网交易平台(以下简称“平台”)所提供的药品信息，以网上采购的形式采购以下药品(见附表)，甲方通过药品网上交易系统向乙方发送订单通知，乙方据此供货;双方确认后的订单为本合同的重要组成部分。乙方对甲方通过平台发出的订单通知，自甲方发出订单通知起一个工作日内必须确认。", config.main);
doc.fontSize(12)
  .text("第二条 乙方须按购销合同采购药品一览表向甲方供应药品(见附表)。", config.main);
doc.fontSize(12)
  .text("第三条 乙方应保证甲方在使用药品时免受第三方提出的有关专利权、商标权或保护期等方面的权利的要求。", config.main);
doc.fontSize(12)
  .text("第四条 乙方所供应药品的质量应符合国家药品相关标准，药品包装、质量及价格须与入围品种的挂网信息一致， 不得更改，按甲方要求提供相应的药检报告书，并将药品送到甲方指定地点。", config.main);
doc.fontSize(12)
  .text("第五条 供货期限", config.main);
doc.fontSize(12)
  .text("乙方应自确认甲方订单通知起一个工作日内交货，最长不超过两个工作日;急救药品乙方应在4小时内送到。", config.main);

doc.fontSize(12)
  .text("第六条 供货价格与货款结算", config.main);
doc.fontSize(12)
  .text("(一)供货价格：按平台所公布的采购价格执行，该价格包含成本、运输、包装、 伴随服务、税费及其他一切附加费用;合同履行期间，如遇政策性调价，按平台更新后的价格执行，包括尚未售出的药品。", config.main);
doc.fontSize(12)
  .text("(二)货款结算：甲方在收到配送药品之日起最迟不得超过60日进行货款结算。", config.main);
doc.fontSize(12)
  .text("第七条 药品验收及异议", config.main);
doc.fontSize(12)
  .text("甲方对不符合质量、有效期、包装和订单数量要求的药品，有权拒绝接收， 乙方应对不符合要求的药品及时进行更换，不得影响甲方的临床应用。甲方因使用、保管、保养不善等自身原因造成产品失效或质量下降的，后果自负。", config.main);
doc.fontSize(12)
  .text("第八条甲方的违约责任", config.main);
doc.fontSize(12)
  .text("(一)甲方违反本合同的规定，通过平台以外途径购买替代挂网入围药品，承担违约责任;", config.main);
doc.fontSize(12)
  .text("(二)甲方无正当理由违反合同规定拒绝收货或违约付款的，应当承担乙方由此造成的损失;", config.main);
doc.fontSize(12)
  .text("以上两种情形，乙方有权向当地纠正医药购销和医疗服务中不正之风工作领导小组办公室举报。", config.main);
doc.fontSize(12)
  .text("第九条乙方的违约责任", config.main);
doc.fontSize(12)
  .text("(一)乙方确认甲方发出的订单通知后拒绝供货的，应承担违约责任。", config.main);
doc.fontSize(12)
  .text("(二)乙方所供药品因药品质量不符合有关规定而造成后果的，按相关法律规定处理。", config.main);
doc.fontSize(12)
  .text("以上两种情形，甲方有权向当地纠正医药购销和医疗服务中不正之风工作领导小组办公室举报。", config.main);
doc.fontSize(12)
  .text("第十条 合同当事人因不可抗力而导致合同实施延误或不能履行合同义务，不承担误期赔偿或终止合同的责任。(“不可抗力”系指那些合同双方无法控制、不可预见的事件，但不包括合同某一方的违约或疏忽。这些事件包括但不限于：战争、严重火灾、洪水、台风、地震及其他双方商定的事件)。在不可抗力事件发生后，合同双方应尽快以书面形式将不可抗力的情况和原因通知对方。除另行要求外，\ 合同双方应尽实际可能继续履行合同义务，以及寻求采取合理的方案履行不受不可抗力影响的其他事项。不可抗力事件影响消除后，双方可通过协商在合理的时间内达成进一步履行合同的协议。", config.main);
doc.fontSize(12)
  .text("第十一条 合同的变更及解除", config.main);
doc.fontSize(12)
  .text("由于药品生产企业关、停、并、转的原因造成合同不能履行的，乙方应及时向甲方通报并提供省级以上药监部门证明， 双方可以解除就该药品订立的合同，合同如需变更，须经双方协商解决。", config.main);
doc.fontSize(12)
  .text("第十二条 本合同未尽事项，按《互联网药品信息服务管理办法》、《互联网药品交易服务管理办法》执行。仍然无法确定的，经双方共同协商，可根据以上两个文件及相关法律法规的规定签订补充协议，补充协议与正式合同具有同等法律效力。", config.main);
doc.fontSize(12)
  .text("第十三条 因合同引起的或与本合同有关的任何争议，由双方当事人协商解决;协商或调解不成，当事人可依照有关法律规定将争议提交仲裁，或向人民法院起诉。", config.main);
doc.fontSize(12)
  .text("第十四条 本合同自双方签订之日起生效，自本合同生效之日起在合同期内发生的有关网上交易的各项事宜，均受本合同的约束。", config.main);
doc.fontSize(12)
  .text("第十六条 本合同有效期从同意之日起，90天后自动失效。", config.main);

emptyline(3, doc);
doc.fontSize(12)
  .text("甲方盖章：                            乙方盖章：");

doc.addPage();

addOrder(data.order, doc);
var timestamp = new Date();
var contractName = strftime("%Y%m%d%H%I%M%S", timestamp);
doc.pipe(fs.createWriteStream('contract/b.pdf', {defaultEncoding: 'utf-8'}));
var contractSignature =fs.readFileSync('contract/b.pdf');
var contractPdf = new Buffer(contractSignature).toString('base64');
doc.end();

function emptyline(number, doc) {
  for (var i = 0; i < number; i++) {
    doc.moveDown();
  }
}

function addGoods(goods, doc) {
  doc.fontSize(10)
    .text("【" + goods.name + "/" + goods.producer + "/" + goods.spec + "】* " + goods.quantity + " " + goods.unit, {indent: 20});
  doc.fontSize(10)
    .text("供价: ￥" + goods.price.toFixed(2) + "                小计：￥" + (goods.quantity * goods.price).toFixed(2), {indent: 20});
  emptyline(1, doc);
}

function addOrder(order, doc) {
  doc.fontSize(12)
    .text("商品明细表：");
  emptyline(2, doc);
  for (var i = 0; i < order.goods.length; i++) {
    addGoods(order.goods[i], doc);
  }
  emptyline(1, doc);
  doc.fontSize(10)
    .text('运费：+ ¥ ' + order.freight.toFixed(2) + '           商品总额：¥ ' + order.total.toFixed(2),{align: "right"});
  emptyline(1, doc);
  doc.fontSize(10)
    .text('合计： ¥ ' + order.sum.toFixed(2), {align: "right"});
}

