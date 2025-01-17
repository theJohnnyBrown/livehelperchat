<?php if ($context == 'cannedreplacerules') : ?>
    <ul>
        <li><strong>{args.chat.referrer}</strong> `contains`. <?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('genericbot/helpattributes', 'Page where chat started');?></li>
        <li><strong>{args.chat.session_referrer}</strong> `contains`. <?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('genericbot/helpattributes', 'Referer from where visitor come to site.');?></li>
        <li><strong>{args.chat.chat_variables_array.&lt;variables&gt;}</strong> = <b>New</b></li>
        <li><strong>{args.chat.dep_id}</strong> = Department ID</li>
        <li><strong>{args.chat.department_role.role}</strong> = Department role <b>vip</b></li>
        <li><strong>{condition.&lt;condition_identifier&gt;}</strong> = Condition identifier <b>valid</b> OR <b>not_valid</b></li>
        <li><strong>{args.chat.chat_variables_array.playerClass}</strong> condition <strong>Text Like</strong> E.g <strong>vip_1,vip_2</strong> <a target="_blank" href="https://doc.livehelperchat.com/docs/bot/triggers#custom-text-matching">exact match.</a></li>
        <li><strong>{args.chat.chat_variables_array.playerClass}</strong> condition <strong>Contains</strong> E.g <strong>vip_</strong> would match <b>vip_1,vip_2</b> </li>

        <?php include(erLhcoreClassDesign::designtpl('lhgenericbot/helpattributes/cannedreplacerules_multiinclude.tpl.php'));?>
    </ul>

    <div class="row">
        <div class="col-6">
            <label><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('genericbot/helpattributes', 'Chat ID to test against');?></label>
            <input id="test-pattern-chat-id" type="number" input="replace_pattern" class="form-control form-control-sm">
        </div>
        <div class="col-6 pb-2">
            <label><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('genericbot/helpattributes', 'Pattern');?></label>
            <input type="text" value="{args.chat.id}" id="test-pattern-replace-pattern" class="form-control form-control-sm">
        </div>
        <div class="col-12">
            <div class="btn-group" role="group" aria-label="Basic example">
                <button type="button" id="test-pattern-action" class="btn btn-sm btn-secondary"><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('genericbot/helpattributes', 'Test');?></button>
                <button type="button" id="extract-pattern-action" class="btn btn-sm btn-secondary"><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('genericbot/helpattributes', 'Extract chat attributes');?></button>
            </div>
        </div>
        <div class="col-12 pt-2">
            <div class="alert alert-info mx300 fs12" id="pattern-replace-response"><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('genericbot/helpattributes', 'Your response will appear here!');?></div>
        </div>
    </div>

    <script>
        $('#test-pattern-action').click(function(){
            $.post(WWW_DIR_JAVASCRIPT + 'genericbot/testpattern/' + $('#test-pattern-chat-id').val(), {'test_pattern' : $('#test-pattern-replace-pattern').val() }, function(data){
                $('#pattern-replace-response').html(data);
            });
        });
        $('#extract-pattern-action').click(function(){
            $.post(WWW_DIR_JAVASCRIPT + 'genericbot/testpattern/' + $('#test-pattern-chat-id').val(), {'extract_action':true }, function(data){
                $('#pattern-replace-response').html(data);
            });
        });
    </script>

<?php endif; ?>