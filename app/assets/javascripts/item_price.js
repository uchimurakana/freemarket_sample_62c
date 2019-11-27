$(function () {
  $('.price-input').on('keyup', (e) => {
    const price = $(e.currentTarget).val();
    const taxRate = 0.1;
    const fee = Math.floor(price * taxRate);

    const profit = price - fee;
    // 正規表現でカンマ区切りに置換
    const newFee = fee.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,')
    const newProfit = profit.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,')
    if (300 <= price && price < 10000000) {
      $('.fee-area__tax-rate').text(`¥${newFee}`);
      $('.profit-area__text').text(`¥${newProfit}`);
    } else {
      $('.fee-area__tax-rate').text('-');
      $('.profit-area__text').text('-');
    }
  })
})