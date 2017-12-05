<template>
  <div>
    <div class="login-window-body">
      <div class="loginWin-normal-login-wrapper" id="loginWin_content_wrapper">
        <div class="loginWin-tab"><a title="扫码登录" class="qrcode-login-tab" href="javascript:void(0);"></a><a
          title="密码登录" class="normal-login-tab" href="javascript:void(0);"></a></div>
        <div class="loginWin-form">
          <form name="topguideloginform" class="loginWin-login-form" id="topguideloginform"
                action="https://passport.tianya.cn/login" method="post" target="_top" accept-charset="UTF-8">
            <div class="loginWin-form-item loginWin-account-input"><input name="vwriter" class="input-text" id="vwriter"
                                                                          type="text" placeholder="用户名/手机/邮箱"
                                                                          autocomplete="off"><input name="action"
                                                                                                    id="user_action"
                                                                                                    type="hidden"
                                                                                                    value="f7.1511690401405.11970,,,,d3.123.1722,b4.6.1354,b6.7.51,b8.8.3076|f651a79013dce337e6baf0562b1ce9c2|d41d8cd98f00b204e9800998ecf8427e|Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; InfoPath.3; .NET4.0C; .NET4.0E; MS-RTC LM 8; rv:11.0) like Gecko|v2.2">
            </div>
            <div class="loginWin-form-item loginWin-password-input"><input name="vpassword" class="input-text"
                                                                           id="vpassword" type="password"
                                                                           placeholder="密码"></div>
            <div class="loginWin-form-item fs12 cf"><label class="fl"><input name="rmflag" class="input-checkbox"
                                                                             id="rmflag" type="checkbox"
                                                                             checked="checked"
                                                                             value="1">下次自动登录</label><a
              class="loginWin-password-link fr" href="http://passport.tianya.cn/fp/fp.jsp" target="_blank">忘记密码？</a>
            </div>
            <div class="loginWin-form-item">
              <button class="loginWin-submit-btn" type="submit">登 录</button>
            </div>
            <div class="fs12 cf"><a class="loginWin-register-link fr"
                                    href="http://passport.tianya.cn/register/default.jsp?fowardURL=" target="_blank">立即注册</a>
            </div>
            <input name="__sid" type="hidden" value="1#3#1.0#5cdde8b2-dae1-4169-9a98-2769fcbd3175"><input
            name="fowardURL" type="hidden" value=""><input name="returnURL" type="hidden" value=""></form>
          <dl class="loginWin-third-list cf">
            <dt>其他帐号登录：</dt>
            <dd><a title="微信账号登录" class="weixin-login"
                   href="https://open.weixin.qq.com/connect/qrconnect?appid=wx160fa51254add6be&amp;response_type=code&amp;redirect_uri=https%3A%2F%2Fpassport.tianya.cn%2Flogin%2Fweixin.do%3Fclient%3Dpc%26fowardURL%3D&amp;scope=snsapi_login#wechat_redirect"></a>
            </dd>
            <dd><a title="QQ账号登录" class="qq-login"
                   href="https://graph.qq.com/oauth2.0/authorize?client_id=100253980&amp;response_type=code&amp;redirect_uri=https%3A%2F%2Fpassport.tianya.cn%2Flogin%2Fqq.do%3Fclient%3Dpc%26fowardURL%3D"></a>
            </dd>
            <dd><a title="新浪微博账号登录" class="weibo-login"
                   href="https://api.weibo.com/oauth2/authorize?client_id=482040646&amp;response_type=code&amp;with_offical_account=1&amp;redirect_uri=https%3A%2F%2Fpassport.tianya.cn%2Flogin%2Fsinaweibo.do%3Fclient%3Dpc%26fowardURL%3D"></a>
            </dd>
          </dl>
        </div>
        <div class="loginWin-qrcode">
          <div class="loginWin-qrcode-box"><img class="loginWin-qrcode-img" src="">
            <div class="loginWin-qrcode-tips"></div>
          </div>
          <p class="loginWin-app-download">打开天涯客户端，扫一扫登录</p>
          <p class="loginWin-qrcode-links"><span class="normal-login-toggle">密码登录</span>　|　<a
            class="loginWin-register-link" href="http://passport.tianya.cn/register/default.jsp?fowardURL="
            target="_blank">立即注册</a></p></div>
      </div>
    </div>
  </div>
</template>
