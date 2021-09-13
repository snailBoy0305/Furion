﻿using Microsoft.Extensions.Configuration;

namespace Furion.UnitTests;

public class TXTConfigurationSource : IConfigurationSource
{
    private readonly Action<TXTOptions> _optionsAction;

    public TXTConfigurationSource(Action<TXTOptions> optionsAction)
    {
        _optionsAction = optionsAction;
    }

    public IConfigurationProvider Build(IConfigurationBuilder builder)
    {
        return new TXTConfigurationProvider(_optionsAction);
    }
}