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
        <#case "CHECKBOX">
            <@checkbox field/>
            <#break>
        <#case "NESTED">
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
<#if field.type == "SELECT">
    <@select field/>
<#else>
    <#assign type = "TEXT">
    <#assign custom = "">

    <#switch field.type>
        <#case "NUMBER">
            <#assign type = "NUMBER">
            <#assign custom = "step=0.01">
            <#break>
        <#case "INTEGER">
            <#assign type = "NUMBER">
            <#assign custom = "step=1">
            <#break>
        <#case "DATE">
            <#assign type = field.format>
            <#break/>
    </#switch>
    <input type="${type}"
           id="${field.id}"
           name="${field.id}"
           class="pf-c-form-control"
<#if field.readOnly == true>
           disabled
</#if>
           ${custom}/>
</#if>
    </div>
</#macro>

<#macro checkbox field>
    <#assign className = "pf-c-check__input">
    <#assign disabled = "">

<#if field.readOnly == true>
    <#assign className = "pf-c-check__label pf-m-disabled">
    <#assign disabled = "disabled">
</#if>

    <div class="pf-c-form__group">
        <div class="pf-c-form__group-control">
            <div class="pf-c-check">
                <input class="pf-c-check__input"
                       type="checkbox"
                       id="${field.id}"
                       name="${field.id}"
                       ${disabled}
                />
                <label class="${className}" for="${field.id}">${field.label}</label>
            </div>
        </div>
    </div>
</#macro>

<#macro select field>
    <select id="${field.id}"
            name="${field.id}"
            class="pf-c-form-control"
<#if field.readOnly == true>
    disabled
</#if>>
<#list field.options as option>
        <option value="${option.value}">
            ${option.text}
        </option>
</#list>
    </select>
</#macro>