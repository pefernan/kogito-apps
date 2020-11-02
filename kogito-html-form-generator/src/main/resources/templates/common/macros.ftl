<#macro formTemplate form>
    <article class="pf-c-card">
<#if (form.title)??>
        <div class="pf-c-card__title">
            ${form.title}
        </div>
</#if>
        <div class="pf-c-card__body pf-c-form">
<#list form.fields as field>
    <#switch field.type>
        <#case "checkbox">
            <@checkbox field/>
            <#break>
        <#case "nested">
            <@formTemplate field/>
            <#break>
        <#default>
            <@formGroup field/>
    </#switch>
</#list>
        </div>
    </article>
</#macro>

<#macro formGroup field>
    <div class="pf-c-form__group">
        <label class="pf-c-form__label" for="${field.id}">
            <span class="pf-c-form__label-text">${field.label}</span>
        </label>
<#switch field.type>
    <#case "text">
        <input type="text" id="${field.id}" name="${field.id}" class="pf-c-form-control" />
    <#break>
    <#case "number">
        <input type="number" id="${field.id}" name="${field.id}" class="pf-c-form-control" />
        <#break>
    <#case "integer">
        <input type="number" id="${field.id}" name="${field.id}" step="1" class="pf-c-form-control" />
        <#break>
    <#case "date">
        <input type="${field.format}" id="${field.id}" name="${field.id}" class="pf-c-form-control"/>
        <#break/>
    <#case "select">
        <@select field/>
        <#break/>
</#switch>
    </div>
</#macro>

<#macro checkbox field>
    <div class="pf-c-form__group">
        <div class="pf-c-form__group-control">
            <div class="pf-c-check">
                <input class="pf-c-check__input" type="checkbox" type="checkbox" id="${field.id}" name="${field.id}" />
                <label class="pf-c-check__label" for="${field.id}">${field.label}</label>
            </div>
        </div>
    </div>
</#macro>

<#macro select field>
    <select id="${field.id}" name="${field.id}" class="pf-c-form-control" value="">
<#list field.options as option>
        <option value="${option.value}">${option.text}</option>
</#list>
    </select>
</#macro>